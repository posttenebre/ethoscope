Search.setIndex({envversion:46,filenames:["ethoscope","ethoscope.core","ethoscope.drawers","ethoscope.hardware","ethoscope.hardware.input","ethoscope.hardware.interfaces","ethoscope.interactors","ethoscope.roi_builders","ethoscope.trackers","ethoscope.utils","ethoscope.web_utils","index"],objects:{"":{ethoscope:[0,0,0,"-"]},"ethoscope.core":{data_point:[1,0,0,"-"],monitor:[1,0,0,"-"],roi:[1,0,0,"-"],tracking_unit:[1,0,0,"-"],variables:[1,0,0,"-"]},"ethoscope.core.data_point":{DataPoint:[1,3,1,""]},"ethoscope.core.data_point.DataPoint":{append:[1,4,1,""],copy:[1,4,1,""]},"ethoscope.core.monitor":{Monitor:[1,3,1,""]},"ethoscope.core.monitor.Monitor":{last_frame_idx:[1,2,1,""],last_positions:[1,2,1,""],last_time_stamp:[1,2,1,""],run:[1,4,1,""],stop:[1,4,1,""]},"ethoscope.core.roi":{ROI:[1,3,1,""]},"ethoscope.core.roi.ROI":{apply:[1,4,1,""],bounding_rect:[1,4,1,""],get_feature_dict:[1,4,1,""],idx:[1,2,1,""],longest_axis:[1,2,1,""],mask:[1,4,1,""],offset:[1,2,1,""],polygon:[1,2,1,""],rectangle:[1,2,1,""],set_value:[1,4,1,""],value:[1,2,1,""]},"ethoscope.core.tracking_unit":{TrackingUnit:[1,3,1,""]},"ethoscope.core.tracking_unit.TrackingUnit":{get_last_position:[1,4,1,""],interactor:[1,2,1,""],roi:[1,2,1,""],track:[1,4,1,""]},"ethoscope.core.variables":{BaseBoolVariable:[1,3,1,""],BaseDistanceIntVar:[1,3,1,""],BaseIntVariable:[1,3,1,""],BaseRelativeVariable:[1,3,1,""],HeightVariable:[1,3,1,""],IsInferredVariable:[1,3,1,""],PhiVariable:[1,3,1,""],WidthVariable:[1,3,1,""],XPosVariable:[1,3,1,""],XYDistance:[1,3,1,""],XorDistance:[1,3,1,""],YPosVariable:[1,3,1,""],mLogLik:[1,3,1,""]},"ethoscope.core.variables.BaseBoolVariable":{functional_type:[1,2,1,""],sql_data_type:[1,2,1,""]},"ethoscope.core.variables.BaseDistanceIntVar":{functional_type:[1,2,1,""]},"ethoscope.core.variables.BaseIntVariable":{functional_type:[1,2,1,""],header_name:[1,2,1,""],sql_data_type:[1,2,1,""]},"ethoscope.core.variables.BaseRelativeVariable":{get_absolute_value:[1,4,1,""],to_absolute:[1,4,1,""]},"ethoscope.core.variables.HeightVariable":{header_name:[1,2,1,""]},"ethoscope.core.variables.IsInferredVariable":{header_name:[1,2,1,""]},"ethoscope.core.variables.PhiVariable":{functional_type:[1,2,1,""],header_name:[1,2,1,""]},"ethoscope.core.variables.WidthVariable":{header_name:[1,2,1,""]},"ethoscope.core.variables.XPosVariable":{get_absolute_value:[1,4,1,""],header_name:[1,2,1,""]},"ethoscope.core.variables.XYDistance":{functional_type:[1,2,1,""],header_name:[1,2,1,""]},"ethoscope.core.variables.XorDistance":{functional_type:[1,2,1,""],header_name:[1,2,1,""]},"ethoscope.core.variables.YPosVariable":{get_absolute_value:[1,4,1,""],header_name:[1,2,1,""]},"ethoscope.core.variables.mLogLik":{functional_type:[1,2,1,""],header_name:[1,2,1,""]},"ethoscope.drawers":{drawers:[2,0,0,"-"]},"ethoscope.drawers.drawers":{BaseDrawer:[2,3,1,""],DefaultDrawer:[2,3,1,""],NullDrawer:[2,3,1,""]},"ethoscope.drawers.drawers.BaseDrawer":{draw:[2,4,1,""],last_drawn_frame:[2,2,1,""]},"ethoscope.hardware":{input:[4,0,0,"-"],interfaces:[5,0,0,"-"]},"ethoscope.hardware.input":{cameras:[4,0,0,"-"]},"ethoscope.hardware.input.cameras":{BaseCamera:[4,3,1,""],MovieVirtualCamera:[4,3,1,""],OurPiCamera:[4,3,1,""],OurPiCameraAsync:[4,3,1,""],PiFrameGrabber:[4,3,1,""],V4L2Camera:[4,3,1,""]},"ethoscope.hardware.input.cameras.BaseCamera":{capture:[4,2,1,""],height:[4,2,1,""],is_last_frame:[4,4,1,""],is_opened:[4,4,1,""],next_time_image:[4,4,1,""],resolution:[4,2,1,""],restart:[4,4,1,""],width:[4,2,1,""]},"ethoscope.hardware.input.cameras.MovieVirtualCamera":{is_last_frame:[4,4,1,""],is_opened:[4,4,1,""],path:[4,2,1,""],restart:[4,4,1,""],start_time:[4,2,1,""]},"ethoscope.hardware.input.cameras.OurPiCamera":{is_last_frame:[4,4,1,""],is_opened:[4,4,1,""],restart:[4,4,1,""],start_time:[4,2,1,""]},"ethoscope.hardware.input.cameras.OurPiCameraAsync":{is_last_frame:[4,4,1,""],is_opened:[4,4,1,""],restart:[4,4,1,""],start_time:[4,2,1,""]},"ethoscope.hardware.input.cameras.PiFrameGrabber":{run:[4,4,1,""]},"ethoscope.hardware.input.cameras.V4L2Camera":{is_last_frame:[4,4,1,""],is_opened:[4,4,1,""],restart:[4,4,1,""],start_time:[4,2,1,""]},"ethoscope.hardware.interfaces":{arduino_api:[5,0,0,"-"],fake_sleep_dep_interface:[5,0,0,"-"],interfaces:[5,0,0,"-"],sleep_depriver_interface:[5,0,0,"-"]},"ethoscope.hardware.interfaces.arduino_api":{NoValidPortError:[5,5,1,""],SleepDepriverInterface:[5,3,1,""],WrongSleepDepPortError:[5,5,1,""]},"ethoscope.hardware.interfaces.arduino_api.SleepDepriverInterface":{deprive:[5,4,1,""]},"ethoscope.hardware.interfaces.fake_sleep_dep_interface":{FakeSleepDepriverConnection:[5,3,1,""],FakeSleepDepriverInterface:[5,3,1,""],FakeSleepDepriverSubProcess:[5,3,1,""]},"ethoscope.hardware.interfaces.fake_sleep_dep_interface.FakeSleepDepriverConnection":{deprive:[5,4,1,""]},"ethoscope.hardware.interfaces.interfaces":{BaseInterface:[5,3,1,""],DefaultInterface:[5,3,1,""]},"ethoscope.hardware.interfaces.interfaces.BaseInterface":{interact:[5,4,1,""]},"ethoscope.hardware.interfaces.interfaces.DefaultInterface":{interact:[5,4,1,""]},"ethoscope.hardware.interfaces.sleep_depriver_interface":{NoValidPortError:[5,5,1,""],SimpleLynxMotionConnection:[5,3,1,""],SleepDepriverConnection:[5,3,1,""],SleepDepriverInterface:[5,3,1,""],SleepDepriverSubProcess:[5,3,1,""],WrongSleepDepPortError:[5,5,1,""]},"ethoscope.hardware.interfaces.sleep_depriver_interface.SimpleLynxMotionConnection":{move_to_angle:[5,4,1,""]},"ethoscope.hardware.interfaces.sleep_depriver_interface.SleepDepriverConnection":{deprive:[5,4,1,""],warm_up:[5,4,1,""]},"ethoscope.hardware.interfaces.sleep_depriver_interface.SleepDepriverInterface":{interact:[5,4,1,""]},"ethoscope.hardware.interfaces.sleep_depriver_interface.SleepDepriverSubProcess":{run:[5,4,1,""]},"ethoscope.interactors":{fake_sleep_dep_interactor:[6,0,0,"-"],interactors:[6,0,0,"-"],sleep_depriver_interactor:[6,0,0,"-"]},"ethoscope.interactors.fake_sleep_dep_interactor":{FakeSleepDepInteractor:[6,3,1,""]},"ethoscope.interactors.fake_sleep_dep_interactor.FakeSleepDepInteractor":{description:[6,2,1,""]},"ethoscope.interactors.interactors":{BaseInteractor:[6,3,1,""],DefaultInteractor:[6,3,1,""],HasInteractedVariable:[6,3,1,""]},"ethoscope.interactors.interactors.BaseInteractor":{bind_tracker:[6,4,1,""]},"ethoscope.interactors.interactors.DefaultInteractor":{description:[6,2,1,""]},"ethoscope.interactors.interactors.HasInteractedVariable":{header_name:[6,2,1,""]},"ethoscope.interactors.sleep_depriver_interactor":{IsMovingInteractor:[6,3,1,""],SleepDepInteractor:[6,3,1,""]},"ethoscope.interactors.sleep_depriver_interactor.SleepDepInteractor":{description:[6,2,1,""]},"ethoscope.roi_builders":{img_roi_builder:[7,0,0,"-"],roi_builders:[7,0,0,"-"],target_roi_builder:[7,0,0,"-"]},"ethoscope.roi_builders.img_roi_builder":{ImgMaskROIBuilder:[7,3,1,""]},"ethoscope.roi_builders.roi_builders":{BaseROIBuilder:[7,3,1,""],DefaultROIBuilder:[7,3,1,""]},"ethoscope.roi_builders.roi_builders.BaseROIBuilder":{build:[7,4,1,""]},"ethoscope.roi_builders.target_roi_builder":{OlfactionAssayROIBuilder:[7,3,1,""],SleepMonitorWithTargetROIBuilder:[7,3,1,""],TargetGridROIBuilder:[7,3,1,""]},"ethoscope.roi_builders.target_roi_builder.OlfactionAssayROIBuilder":{description:[7,2,1,""]},"ethoscope.roi_builders.target_roi_builder.SleepMonitorWithTargetROIBuilder":{description:[7,2,1,""]},"ethoscope.roi_builders.target_roi_builder.TargetGridROIBuilder":{description:[7,2,1,""]},"ethoscope.trackers":{adaptive_bg_tracker:[8,0,0,"-"],single_roi_tracker:[8,0,0,"-"],trackers:[8,0,0,"-"]},"ethoscope.trackers.adaptive_bg_tracker":{AdaptiveBGModel:[8,3,1,""],BackgroundModel:[8,3,1,""],ObjectModel:[8,3,1,""]},"ethoscope.trackers.adaptive_bg_tracker.AdaptiveBGModel":{description:[8,2,1,""],fg_model:[8,2,1,""]},"ethoscope.trackers.adaptive_bg_tracker.BackgroundModel":{bg_img:[8,2,1,""],decrease_learning_rate:[8,4,1,""],increase_learning_rate:[8,4,1,""],update:[8,4,1,""]},"ethoscope.trackers.adaptive_bg_tracker.ObjectModel":{compute_features:[8,4,1,""],distance:[8,4,1,""],features_header:[8,2,1,""],is_ready:[8,2,1,""],update:[8,4,1,""]},"ethoscope.trackers.single_roi_tracker":{AdaptiveBGModelOneObject:[8,3,1,""]},"ethoscope.trackers.trackers":{BaseTracker:[8,3,1,""],NoPositionError:[8,5,1,""]},"ethoscope.trackers.trackers.BaseTracker":{last_time_point:[8,2,1,""],positions:[8,2,1,""],times:[8,2,1,""],xy_pos:[8,4,1,""]},"ethoscope.utils":{debug:[9,0,0,"-"],description:[9,0,0,"-"],img_proc:[9,0,0,"-"],io:[9,0,0,"-"]},"ethoscope.utils.debug":{EthoscopeException:[9,5,1,""],show:[9,1,1,""]},"ethoscope.utils.description":{DescribedObject:[9,3,1,""]},"ethoscope.utils.description.DescribedObject":{description:[9,2,1,""]},"ethoscope.utils.img_proc":{merge_blobs:[9,1,1,""]},"ethoscope.utils.io":{AsyncMySQLWriter:[9,3,1,""],AsyncSQLiteWriter:[9,3,1,""],DAMFileHelper:[9,3,1,""],ImgToMySQLHelper:[9,3,1,""],Null:[9,3,1,""],ResultWriter:[9,3,1,""],SQLiteResultWriter:[9,3,1,""]},"ethoscope.utils.io.AsyncMySQLWriter":{run:[9,4,1,""]},"ethoscope.utils.io.AsyncSQLiteWriter":{run:[9,4,1,""]},"ethoscope.utils.io.DAMFileHelper":{flush:[9,4,1,""],input_roi_data:[9,4,1,""],make_dam_file_sql_fields:[9,4,1,""]},"ethoscope.utils.io.ImgToMySQLHelper":{flush:[9,4,1,""]},"ethoscope.utils.io.ResultWriter":{close:[9,4,1,""],flush:[9,4,1,""],write:[9,4,1,""]},"ethoscope.web_utils":{control_thread:[10,0,0,"-"],helpers:[10,0,0,"-"],record:[10,0,0,"-"]},"ethoscope.web_utils.control_thread":{ControlThread:[10,3,1,""]},"ethoscope.web_utils.control_thread.ControlThread":{info:[10,2,1,""],k:[10,2,1,""],run:[10,4,1,""],stop:[10,4,1,""]},"ethoscope.web_utils.helpers":{get_machine_info:[10,1,1,""],get_version:[10,1,1,""]},"ethoscope.web_utils.record":{RecordVideo:[10,3,1,""]},"ethoscope.web_utils.record.RecordVideo":{run:[10,4,1,""],stop:[10,4,1,""]},ethoscope:{core:[1,0,0,"-"],drawers:[2,0,0,"-"],hardware:[3,0,0,"-"],interactors:[6,0,0,"-"],roi_builders:[7,0,0,"-"],trackers:[8,0,0,"-"],utils:[9,0,0,"-"],web_utils:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","attribute","Python attribute"],"3":["py","class","Python class"],"4":["py","method","Python method"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:attribute","3":"py:class","4":"py:method","5":"py:exception"},terms:{"_rois_from_img":7,"boolean":1,"class":[1,2,4,5,6,7,8,9,10],"default":[6,7,8],"float":[1,7],"function":1,"import":1,"int":[1,7],"long":[],"new":[1,7],"null":9,"return":[1,7,9,10],"true":[1,2,9],about:[],absolut:1,access:1,accord:[1,9],acquir:[0,1,7,11],action:1,adaptive_bg_track:[],adaptivebgmodel:8,adaptivebgmodeloneobject:8,add:1,addit:1,aforement:1,after:6,aim:9,algorithm:[1,9],alia:1,align:7,all:[0,1,11],allow:[0,1,7,11],along:1,also:[0,1,11],amount:[0,11],analys:1,angl:[1,5],ani:1,anim:[0,1,6,8,11],anoth:1,append:1,appli:1,arbitrari:[1,8],arduino_api:3,arena:[0,6,7,11],arg:[1,4,5,9,10],argument:[1,6,7,8],arrai:1,assai:7,assign:1,associ:1,asyncmysqlwrit:9,asyncsqlitewrit:9,attribut:1,automat:[],avail:[0,11],averag:[7,8],awaken:6,axi:[1,9],back:[0,11],background:8,backgroundmodel:8,base:[1,2,4,5,6,7,8,9,10],baseboolvari:[1,6],basecamera:[1,4,7],basedistanceintvar:1,basedraw:[1,2],baseinteractor:[1,6],baseinterfac:5,baseintvari:1,baserelativevari:1,baseroibuild:7,basetrack:[1,8],basi:1,behaviour:[0,11],between:9,bg_img:8,bind_track:6,black:7,blob:9,bool:1,both:[0,1,11],bottl:[0,11],bottom:7,bottom_margin:7,bound:1,bounding_rect:1,branch:10,brick:1,build:[0,1,7,11],builder:7,built:1,call:1,camera:3,can:[0,1,11],cannot:1,captur:4,chanel:1,channel:[1,5],cirl:7,classbaserelativevari:1,close:9,collect:1,colour:[],column:[1,7],com:[],combin:[],compar:1,compon:7,comput:[0,1,11],compute_featur:8,conceptu:1,connect:[0,11],construct:7,contain:1,continu:7,contour:[8,9],contourss:9,control:1,control_thread:[],controlthread:10,convert:1,convex:9,coordin:1,copi:1,core:[],corner:1,correspond:1,count:6,creat:1,crop:1,custom:1,cut:1,damfilehelp:9,data:[8,9],data_point:[],data_row:9,databas:1,datapoint:1,datetim:6,db_credenti:9,db_name:9,debug:[],decrease_learning_r:8,deep:1,defaultdraw:2,defaultinteractor:6,defaultinterfac:5,defaultroibuild:7,defin:[1,7],deleg:1,depriv:[5,6],deriv:1,describedobject:[6,7,8,9],descript:6,design:[0,7,11],detect:1,determin:7,dev:5,develop:[0,6,11],devic:4,dict:1,dictionari:1,dimens:1,dir:10,displai:1,dist_pt:[],distanc:[1,7,8,9],doe:[],done:7,dongl:[0,11],draw:[1,2],draw_fram:2,drawer:[],drawn:7,drop_each:4,dummi:6,dynam:8,each:[0,1,7,11],effici:1,either:[1,7],element:1,end:[0,6,11],end_datetim:6,enhanc:[0,11],entir:[1,7],error:10,ethoscope_data:10,ethoscope_dir:10,ethoscope_hardwar:[],ethoscopeexcept:9,except:[5,8,9],experiment:[0,11],express:1,extrem:[0,11],facilit:1,fake:5,fake_sleep_dep_interactor:[],fake_sleep_dep_interfac:3,fakesleepdepinteractor:6,fakesleepdepriverconnect:5,fakesleepdepriverinterfac:5,fakesleepdepriversubprocess:5,fals:[1,4,5,9],featur:8,features_head:8,feed:[0,11],fg_mask:8,fg_model:8,field:1,file:[0,7,10,11],fixm:6,flexibl:[0,7,11],fli:8,flush:9,fnsnvfgm:[],follow:1,folow:1,forc:1,foreground:8,form:1,formalis:1,format:1,frame:[1,7,8],framer:10,freatur:1,from:[0,1,7,11],front:[0,11],fruit:8,functional_typ:1,gener:[0,11],get:9,get_absolute_valu:1,get_feature_dict:1,get_last_posit:1,get_machine_info:10,get_vers:10,gilest:[],gilestro:[0,11],gilestrolab:[],github:[],global:[],glue:1,grei:[],greyscal:7,grid:7,hardwar:[],hardware_interfac:6,has_interact:6,hasinteractedvari:6,have:1,header:1,header_nam:[1,6],height:4,heightvari:1,helper:[],here:[0,7,11],heterogen:8,history_length:8,holder:7,hole:1,horizont:7,horizontal_fil:7,horizontal_margin:7,how:1,html:6,http:6,hull:9,identifi:1,idx:[1,5],imag:[0,1,7,11],img:[1,2,8,9],img_proc:[],img_roi_build:[],img_t:8,imgmaskroibuild:7,imgtomysqlhelp:9,implement:[1,7],inact:6,includ:[],increase_learning_r:8,increment:8,indefinit:1,independ:1,index:[1,11],individu:[0,1,11],infer:1,info:10,inform:1,inherit:1,initialis:[],input:3,input_roi_data:9,insid:7,instanc:1,instanti:1,instead:6,instruct:[0,11],integr:[0,11],interact:[0,1,5,11],interactor:[],interest:1,interfac:3,intern:1,internet:[0,11],interrupt:1,is_inf:1,is_last_fram:4,is_open:4,is_readi:8,isinferredvari:1,ismovinginteractor:6,ispsumvfdjknbv:[],item:1,keyword:1,kwarg:[1,4,5,9,10],lab:[0,11],lai:[0,11],larg:[0,11],last:1,last_drawn_fram:2,last_frame_idx:1,last_posit:1,last_time_point:8,last_time_stamp:1,layout:[1,7],least:[1,9],left:[1,7],left_margin:7,length:7,link:1,list:[1,7,9],local:[0,11],longest:[1,9],longest_axi:1,lorem:[],machin:10,machine_id:10,main:[],make:[],make_dam_file_sql_field:9,make_dam_like_t:9,mask:1,mask_path:7,max:[6,7],max_dur:4,max_half_lif:8,mean:1,meant:1,merg:9,merge_blob:9,messag:6,metadata:9,method:[1,7],micro:[0,11],middl:7,min:[6,7],min_half_lif:8,min_inactive_tim:6,minim:[1,6],mlog_l_x1000:1,mloglik:1,mnvsm:[],model:8,modif:1,modular:[0,7,11],moment:1,monitor:[],morpholog:9,most:1,motor:6,move:6,move_to_angl:5,movement:6,movievirtualcamera:4,much:[0,11],multipl:1,multiprocess:[4,5,9],must:[1,7],mysql:1,myvideo:10,n_col:7,n_roi:9,n_row:7,name:[0,1,6,7,10,11],ndarrai:[1,7],new_val:1,nex:1,next_time_imag:4,none:[1,2,4,5,8,9,10],nopositionerror:8,novalidporterror:5,nulldraw:2,number:[1,6,7],object:[1,2,4,5,7,8,9],objectmodel:8,odor:7,offset:1,olfactionassayroibuild:7,olfactori:7,onli:6,open:[0,11],oper:[1,9],option:1,orchestr:1,order:[0,1,11],ordereddict:1,orient:1,origin:1,other:1,our:[0,11],ourpicamera:4,ourpicameraasync:4,overview:[1,6,7,8],page:11,param:7,paramet:[1,7,9],part:9,pass:1,path:[4,10],per:[1,8],perform:1,period:9,phi:1,phivari:1,physic:[1,9],piframegrabb:4,platform:[0,11],plot:1,point:1,polygon:1,polygonaltre:[],port:5,portion:1,posit:[1,2,8,9],possibl:[0,11],post:[],predict:8,prefer:[0,11],preserv:1,print:[0,1,6,11],proba:1,process:[1,4,5,9],project:[0,11],prop:9,proport:7,provid:[0,1,11],pt1:[],pt2:[],pysic:1,python:[],queue:[4,5,9],raspeberri:[0,11],rate:8,raw:1,read:10,real:[0,11],record:[],recordvideo:10,rectangl:1,refer:[1,7],region:[0,1,7,11],regular:[0,11],regularli:[0,11],rel:[1,7],relative_distance_1e3:1,relative_distance_1e6:1,render:[0,11],repositori:[0,11],request:1,resolut:[4,10],respons:[1,7],restart:4,result:[1,10],result_writ:1,resultwrit:[1,9],rethom:[0,11],retriev:1,right:[1,7],right_margin:7,roi:[],roi_build:[],roibuild:7,row:[6,7],run:[0,1,4,5,8,9,10,11],same:[1,7,9],save:1,scale:[],search:11,second:1,see:[1,6],select:7,send:[0,11],serial:5,serialexcept:5,serialutil:5,server:[0,11],servo:6,set:[0,11],set_valu:1,sever:[1,7],should:1,show:9,side:[0,1,7,11],simplelynxmotionconnect:5,simpli:[1,6,7],sinc:1,singl:[1,7],single_roi_track:[],size:9,sleep:[6,7],sleep_depriver_interactor:[],sleep_depriver_interfac:3,sleepdepinteractor:6,sleepdepriverconnect:5,sleepdepriverinterfac:5,sleepdepriversubprocess:5,sleepmonitorwithtargetroibuild:7,small:[0,11],smaller:9,smallint:1,sourc:[1,2,4,5,6,7,8,9,10],space:[1,7],specif:1,sql_data_typ:1,sqliteresultwrit:9,stamp:1,start:[0,1,6,11],start_datetim:6,start_tim:4,statist:[0,11],step:[6,7],stop:[1,10],stop_queu:4,store:1,straightforward:[0,11],stream:7,sub:1,subclass:7,submodul:[],summari:[0,11],support:8,synchronis:[0,11],system:1,tabl:[],take:7,take_frame_shot:9,target:7,target_fp:4,target_resolut:4,target_roi_build:[],targetgridroibuild:7,targetgridroibuilderbas:[],temlpat:1,templat:7,ten:[6,7],test:[],than:9,thank:[0,11],thei:[1,9],them:[0,7,9,11],thi:[0,1,7,9,11],thread:[1,10],three:[1,7],time:[0,1,5,6,8,11],to_absolut:1,todo:6,togeth:[1,9],tool:[0,11],top:[1,7],top_margin:7,track:[0,1,8,11],tracker:6,tracker_class:1,tracking_class:1,tracking_unit:[],trackingunit:1,treat:1,ttyusb0:5,tube:[6,7],tupl:1,two:[6,7,9],type:[1,6,7],typic:[0,1,7,11],uint8:1,uniqu:[1,7],updat:[0,8,11],upright:1,use_wall_clock:4,user:[0,7,11],util:6,v4l2camera:4,valu:[1,7,9,10],variabl:[],veloc:6,velocity_threshold:6,version:10,vertic:7,vertical_fil:7,video:[0,1,11],video_out:2,visualis:[0,11],warm_up:5,web_util:[],what:1,when:[6,7],where:1,whether:1,which:[1,6],whole:1,width:[4,7],widthvari:1,wireless:[0,11],within:1,without:9,would:[],write:[1,9],writer:1,wrongsleepdepporterror:5,xor_dist:1,xordist:1,xposvari:1,xy_dist_log10x1000:1,xy_po:8,xydist:1,yet:1,yposvari:1},titles:["ethoscope package","ethoscope.core package","ethoscope.drawers package","ethoscope.hardware package","ethoscope.hardware.input package","ethoscope.hardware.interfaces package","ethoscope.interactors package","ethoscope.roi_builder package","ethoscope.trackers package","ethoscope.utils package","ethoscope.web_utils package","Welcome to ethoscope&#8217;s documentation!"],titleterms:{adaptive_bg_track:8,analysi:[0,11],arduino_api:5,between:[0,11],camera:4,commun:[0,11],content:[0,1,2,3,4,5,6,7,8,9,10,11],control_thread:10,core:1,data:[0,11],data_point:1,debug:9,descript:9,devic:[0,11],document:11,drawer:2,ethoscop:[0,1,2,3,4,5,6,7,8,9,10,11],fake_sleep_dep_interactor:6,fake_sleep_dep_interfac:5,hardwar:[0,3,4,5,11],helper:10,hock:[0,11],img_proc:9,img_roi_build:7,indic:11,input:4,interactor:6,interfac:5,modul:[0,1,2,3,4,5,6,7,8,9,10,11],monitor:1,node:[0,11],packag:[0,1,2,3,4,5,6,7,8,9,10],post:[0,11],record:10,roi:1,roi_build:7,single_roi_track:8,sleep_depriver_interactor:6,sleep_depriver_interfac:5,softwar:[0,11],submodul:[2,4,5,6,8,9,10,11],subpackag:[0,3],tabl:11,target_roi_build:7,tracker:8,tracking_unit:1,util:9,variabl:1,web_util:10,welcom:11}})