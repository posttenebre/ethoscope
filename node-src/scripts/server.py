from bottle import *
app = Bottle()
import shlex
import urllib2

import subprocess,json
import threading

devices_list ={}

@app.get('/favicon.ico')
def get_favicon():
    return server_static('../static/img/favicon.ico')

@app.route('/static/<filepath:path>')
def server_static(filepath):
    return static_file(filepath, root="../static")


@app.route('/')
def index():
    return static_file('index.html', root='../static')


#################################
# API to connect with SM/SD
#################################

@app.get('/devices')
def devices():
    global devices_list
    devices_list = {}
    strs = subprocess.check_output(shlex.split('ip r l'))
    host_ip = strs.split(b'src')[-1].split()[0]
    host_ip = host_ip.decode('utf-8').split('.')

    thread =[]

    for i in range(0,256):
            ip = "http://"+host_ip[0]+'.'+host_ip[1]+'.' \
            +host_ip[2]+'.'+str(i)
            t=Discover(0.5, ip)
            thread.append(t)
            thread[i].start()

    for i in range(0,256):
            thread[i].join()

    return devices_list

@app.get('/devices_list')
def devices_list():
    return devices_list

#Get the information of one Sleep Monitor
@app.get('/device/<id>')
def device(id):
    try:
        req = urllib2.Request(url=devices_list[id][ip]+':9000/')
        f = urllib2.urlopen(req,timeout = self.scanInterval)
        message = f.read()
        if message:
            data = json.loads(message)
            data['ip'] = self.url
            devices_list[data['id']]= data

    except:
        pass

@app.get('/sm/<id>')
def redirection_to_home(id):
    return redirect('/')


#################
# HELP METHODS
#################
class Discover(threading.Thread):
    def __init__(self, scanInterval, url):
        threading.Thread.__init__(self)
        self.url = url
        self.scanInterval = scanInterval

    def run(self):
        global devices_list
        try:
            req = urllib2.Request(url=self.url+':9000/id')
            f = urllib2.urlopen(req,timeout = self.scanInterval)
            message = f.read()
            if message:
                data = json.loads(message)
                data['ip'] = self.url
                devices_list[data['id']]=data

        except:
            pass


if __name__ == '__main__':
    run(app, host='0.0.0.0', port=8000, debug=True)



