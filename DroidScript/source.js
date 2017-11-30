function App() 
{				
	this.GetType = function() { return "App"; };
	this.GetObjects = function() { return _map; };
	this.Exit = function( kill ) { prompt( "#", "App.Exit("+kill ); };
	this.ToBack = function() { prompt( "#", "App.ToBack(" ); };
	this.Execute = function( js ) { prompt( "#", "App.Execute("+js ); }; 
	this.StartApp = function( file,options,intent ) { prompt( "#", "App.StartApp(\f"+file+"\f"+options+"\f"+intent ); };
	this.StopApp = function( name ) { prompt( "#", "App.StopApp("+name ); };
	this.SetScreenMode = function( mode ) { prompt( "#", "App.SetScreenMode(\f"+mode ); };
	this.SetOptions = function( options ) { prompt( "#", "App.SetOptions(\f"+options ); };
	this.SetTheme = function( theme ) { prompt( "#", "App.SetTheme(\f"+(theme?theme.id:null) ); };
	this.SetPosition = function( left,top,width,height,options ) { prompt( "#", "App.SetPosition(\f"+left+"\f"+top+"\f"+width+"\f"+height+"\f"+options ); };
	this.SetBackColor = function( clr ) { prompt( "#", "App.SetBackColor(\f"+clr ); }; 
	this.StartService = function( packageName,className ) { prompt( "#", "App.StartService(\f"+packageName+"\f"+className ); };
	this.StopService = function() { prompt( "#", "App.StopService(" ); };
	this.StartDebugServer = function() { prompt( "#", "App.StartDebugServer(" ); };
	this.SendIntent = function( packageName,className,action,category,uri,type,extras,options,callback ) { prompt( "#", "App.SendIntent(\f"+packageName+"\f"+className+"\f"+action+"\f"+category+"\f"+uri+"\f"+type+"\f"+extras+"\f"+options+"\f"+_Cbm(callback) ); };
	this.BroadcastIntent = function( action,category,data,type,extras ) { prompt( "#", "App.BroadcastIntent(\f"+action+"\f"+category+"\f"+data+"\f"+type+"\f"+extras ); };
	this.SendMessage = function( msg ) { prompt( "#", "App.SendMessage(\f"+msg ); };
	this.LoadScript = function( url, callback ) { _LoadScript( url, callback ); };
	this.LoadPlugin = function( url ) { _LoadPlugin( url ); };
	this.Try = function( p1,p2,p3 ) { return prompt( "#", "App.Try(\f"+p1+"\f"+p2+"\f"+p3 ); };
	this.SysExec = function( cmd,options,maxRead,timeout ) { return prompt( "#", "App.SysExec(\f"+cmd+"\f"+options+"\f"+maxRead+"\f"+timeout ); };
	this.SetPriority = function( level ) { prompt( "#", "App.SetPriority(\f"+level ); };
	this.Odroid = function( p1,p2,p3 ) { return prompt( "#", "App.Odroid(\f"+p1+"\f"+p2+"\f"+p3 ); };
	this.GetName = function() { return prompt( "#", "App.GetName(" ); };
	this.GetPath = function() { return prompt( "#", "App.GetPath(" ); };
	this.GetAppName = function() { return prompt( "#", "App.GetAppName(" ); };
	this.GetAppPath = function() { return prompt( "#", "App.GetAppPath(" ); };
	this.GetVersion = function() { return parseFloat(prompt( "#", "App.GetVersion(" )); };
	this.GetDSVersion = function() { return parseFloat(prompt( "#", "App.GetDSVersion(" )); };
	this.IsNewVersion = function() { return prompt( "#", "App.IsNewVersion(" )=="true"; };
	this.IsAPK = function() { return prompt( "#", "App.IsAPK(" )=="true"; };
	this.IsService = function() { return prompt( "#", "App.IsService(" )=="true"; };
	this.IsPremium = function() { return prompt( "#", "App.IsPremium(" )=="true"; };
	this.IsEngine = function() { return prompt( "#", "App.IsEngine(" )=="true"; };
	this.GetPackageName = function() { return prompt( "#", "App.GetPackageName(" ); };
	this.CheckLicense = function( key ) { prompt( "#", "App.CheckLicense(\f"+key ); };
	this.GetAccounts = function() { return prompt( "#", "App.GetAccounts(" ); };
	this.GetUser = function() { return prompt( "#", "App.GetUser(" ); };
	this.GetDeviceId = function() { return prompt( "#", "App.GetDeviceId(" ); };
	this.GetCountryCode = function() { return prompt( "#", "App.GetCountryCode(" ); };
	this.GetLanguageCode = function() { return prompt( "#", "App.GetLanguageCode(" ); };
	this.GetCountry = function() { return prompt( "#", "App.GetCountry(" ); };
	this.GetLanguage = function() { return prompt( "#", "App.GetLanguage(" ); };
	this.GetOptions = function() { return prompt( "#", "App.GetOptions(" ); };
	this.GetSharedText = function( index ) { return prompt( "#", "App.GetSharedText("+index ); };
	this.GetSharedFiles = function() { var s = prompt( "#", "App.GetSharedFiles(" ); if(s.length) return s.split(","); else return null; };
	this.GetActivities = function( options ) { return eval(prompt( "#", "App.GetActivities(\f"+options )); };
	this.IsAppInstalled = function( packageName ) { return prompt( "#", "App.IsAppInstalled(\f"+packageName )=="true"; };
	this.GetInstalledApps = function() { return eval(prompt( "#", "App.GetInstalledApps(\f" )); };
	this.GetRunningApps = function() { return eval(prompt( "#", "App.GetRunningApps(\f" )); };
	this.GetRunningServices = function() { return eval(prompt( "#", "App.GetRunningServices(\f" )); };
	this.GetMemoryInfo = function() { return eval(prompt( "#", "App.GetMemoryInfo(\f" )); };
	this.GetIntent = function() { var s = prompt( "#", "App.GetIntent(" ); if(s.length) return JSON.parse(s); else return null; };
	this.GetNotifyId = function() { return prompt( "#", "App.GetNotifyId(" ); };
	this.SetSharedApp = function( name ) { prompt( "#", "App.SetSharedApp("+name ); };
	this.GetMediaFile = function( appName,ext ) { return prompt( "#", "App.GetMediaFile(\f"+appName+"\f"+ext ); };
	this.KillApp = function( procId ) { prompt( "#", "App.KillApp("+procId ); };
	this.CreateShortcut = function( name,iconFile,file,options ) { prompt( "#", "App.CreateShortcut(\f"+name+"\f"+iconFile+"\f"+file+"\f"+options ); };
	this.GetBuildNum = function() { return parseInt( prompt( "#", "App.GetBuildNum(" )); };
	this.GetOSVersion = function() { return parseInt( prompt( "#", "App.GetBuildNum(" )); };
	this.GetModel = function() { return prompt( "#", "App.GetModel(" ); };
	this.IsTablet = function() { return prompt( "#", "App.IsTablet(" )=="true"; };
	this.IsChrome = function() { return prompt( "#", "App.IsChrome(" )=="true"; };
	this.IsThings = function() { return prompt( "#", "App.IsThings(" )=="true"; };
	this.SetOnError = function( callback ) { prompt( "#", "App.SetOnError(\f"+_Cbm(callback) ); };
	this.SetOnDebug = function( callback ) { prompt( "#", "App.SetOnDebug(\f"+_Cbm(callback) ); };
	this.SetOnKey = function( callback ) { prompt( "#", "App.SetOnKey(\f"+_Cbm(callback) ); };
	this.SetOnShowKeyboard = function( callback ) { prompt( "#", "App.SetOnShowKeyboard(\f"+_Cbm(callback) ); };
	this.SetOnWifiChange = function( callback ) { prompt( "#", "App.SetOnWifiChange(\f"+_Cbm(callback) ); };
	this.DisableKeys = function( keyList ) { prompt( "#", "App.DisableKeys(\f"+keyList ); };
	this.GetIPAddress = function() { return prompt( "#", "App.GetIPAddress(" ); };
	this.GetMacAddress = function() { return prompt( "#", "App.GetMacAddress(" ); };
	this.GetSSID = function() { return prompt( "#", "App.GetSSID(" ); };
	this.Broadcast = function( type,msg ) { prompt( "#", "App.Broadcast("+type+"\f"+msg ); };
	this.SetOnBroadcast = function( callback ) { prompt( "#", "App.SetOnBroadcast("+_Cbm(callback) ); };
	this.SetData = function( name,value ) { prompt( "#", "App.SetData(\f"+name+"\f"+value ); };
	this.GetData = function( name ) { return prompt( "#", "App.GetData(\f"+name ); };
	this.SetClipboardText = function( txt ) { prompt( "#", "App.SetClipboardText("+txt ); };
	this.GetClipboardText = function() { return prompt( "#", "App.GetClipboardText(" ); };
	this.EnableBackKey = function( enable ) { prompt( "#", "App.EnableBackKey("+enable ); };
	this.Wait = function( secs ) { prompt( "#", "App.Wait("+secs ); };
	this.Alert = function( msg,title,options,hue ) { prompt( "#", "App.Alert(\f"+msg+"\f"+title+"\f"+options+"\f"+hue ); };
	this.HideKeyboard = function( hide ) { prompt( "#", "App.HideKeyboard("+hide ); };
	this.ShowKeyboard = function( obj ) { return prompt( "#", "App.ShowKeyboard(\f"+obj.id )=="true"; };
	this.IsKeyboardShown = function() { return prompt( "#", "App.IsKeyboardShown(" )=="true"; };
	this.GetKeyboardHeight = function() { return prompt( "#", "App.GetKeyboardHeight(" ); };
	this.TextToSpeech = function( text,pitch,rate,callback,stream,locale,engine ) { prompt( "#", "App.TextToSpeech(\f"+text+"\f"+pitch+"\f"+rate+"\f"+_Cbm(callback)+"\f"+stream+"\f"+locale+"\f"+engine ); };
	this.Debug = function( msg ) { prompt( "#", "App.Debug(\f"+msg ); };
	this.Error = function( msg,line,file,quit ) { prompt( "#", "App.Error(\f"+msg+"\f"+line+"\f"+file+"\f"+quit ); };
	this.SetDebugEnabled = function( enable ) { prompt( "#", "App.SetDebugEnabled("+enable ); _dbg=enable; };
	this.CreateDebug = function() { prompt( "#", "App.CreateDebug(" ); };
	this.ShowDebug = function( show ) { prompt( "#", "App.ShowDebug("+show ); };
	this.SendMail = function( address,subject,body,attach,type ) { prompt( "#", "App.SendMail("+address+"\f"+subject+"\f"+body+"\f"+attach+"\f"+type ); };	
	this.SendFile = function( file,subject,text,choose ) { prompt( "#", "App.SendFile(\f"+file+"\f"+subject+"\f"+text+"\f"+choose ); };
	this.SendText = function( text,subject,choose ) { prompt( "#", "App.SendText(\f"+text+"\f"+subject+"\f"+choose ); };
	this._Extract = function( p1 ) { prompt( "#", "App._Extract("+p1 ); };
	this.ExtractAssets = function( src,dest,overwrite ) { prompt( "#", "App.ExtractAssets(\f"+src+"\f"+dest+"\f"+overwrite ); };
	this.GetResourceId = function( name,options ) { return parseInt(prompt( "#", "App.GetResourceId(\f"+name+"\f"+options )); };
	this.Vibrate = function( pattern ) { prompt( "#", "App.Vibrate("+pattern ); };
	this.ShowPopup = function( msg,options ) { prompt( "#", "App.ShowPopup("+msg+"\f"+options ); };
	this.ShowProgress = function( msg,options ) { prompt( "#", "App.ShowProgress(\f"+msg+"\f"+options ); };	
	this.HideProgress = function() { prompt( "#", "App.HideProgress(" ); };
	this.ShowProgressBar = function( title,percent,options ) { prompt( "#", "App.ShowProgressBar(\f"+title+"\f"+percent+"\f"+options ); };
	this.UpdateProgressBar = function( percent ) { prompt( "#", "App.UpdateProgressBar(\f"+percent ); };
	this.HideProgressBar = function() { prompt( "#", "App.HideProgressBar(" ); };
	this.LoadText = function( name,dflt,file ) { return prompt( "#", "App.LoadText("+name+"\f"+dflt+"\f"+file ); };
	this.LoadNumber = function( name,dflt,file ) { return parseFloat(prompt( "#", "App.LoadNumber("+name+"\f"+dflt+"\f"+file )); };
	this.LoadBoolean = function( name,dflt,file ) { return (prompt( "#", "App.LoadBoolean("+name+"\f"+dflt+"\f"+file )=="true"); };
	this.SaveText = function( name,value,file ) { prompt( "#", "App.SaveText("+name+"\f"+value+"\f"+file ); };
	this.SaveNumber = function( name,value,file ) { prompt( "#", "App.SaveNumber("+name+"\f"+value+"\f"+file ); };
	this.SaveBoolean = function( name,value,file ) { prompt( "#", "App.SaveBoolean("+name+"\f"+value+"\f"+file ); };
	this.ClearData = function( file ) { prompt( "#", "App.ClearData(\f"+file ); };
	this.GetTop = function() { return parseFloat(prompt( "#", "App.GetTop(" )); };
	this.HasSoftNav = function() { return prompt( "#", "App.HasSoftNav(" )=="true"; };
	this.GetScreenWidth = function( options ) { return parseFloat(prompt( "#", "App.GetScreenWidth(\f"+options )); };
	this.GetScreenHeight = function( options ) { return parseFloat(prompt( "#", "App.GetScreenHeight(\f"+options )); };
	this.GetScreenDensity = function() { return parseFloat(prompt( "#", "App.GetScreenDensity(" )); };
	this.GetDisplayWidth = function() { return parseFloat(prompt( "#", "App.GetDisplayWidth(" )); };
	this.GetDisplayHeight = function() { return parseFloat(prompt( "#", "App.GetDisplayHeight(" )); };
	this.GetDefaultOrientation = function() { return prompt( "#", "App.GetDefaultOrientation(" ); };
	this.GetOrientation = function() { return prompt( "#", "App.GetOrientation(" ); };
	this.SetOrientation = function( orient,callback ) { prompt( "#", "App.SetOrientation(\f"+orient+"\f"+_Cbm(callback) ); };
	this.GetRotation = function() { return parseInt(prompt( "#", "App.GetRotation(" )); };
	this.GetBatteryLevel = function() { return parseFloat(prompt( "#", "App.GetBatteryLevel(\f" )); };
	this.IsCharging = function() { return prompt( "#", "App.IsCharging(" )=="true"; };
	this.GetChargeType = function() { return prompt( "#", "App.GetChargeType(\f" ); };
	this.PreventScreenLock = function( mode ) { prompt( "#", "App.PreventScreenLock("+mode ); };
	this.PreventWifiSleep = function() { prompt( "#", "App.PreventWifiSleep(" ); };
	this.SetWifiEnabled = function( enable ) { prompt( "#", "App.SetWifiEnabled(\f"+enable ); };
	this.IsWifiEnabled = function() { return prompt( "#", "App.IsWifiEnabled(" )=="true"; };
	this.WifiConnect = function( ssid,key ) { prompt( "#", "App.WifiConnect(\f"+ssid+"\f"+key ); };
	this.IsConnected = function() { return prompt( "#", "App.IsConnected(" )=="true"; };
	this.SetBluetoothEnabled = function( enable ) { prompt( "#", "App.SetBluetoothEnabled(\f"+enable ); };
	this.IsBluetoothEnabled = function() { return prompt( "#", "App.IsBluetoothEnabled(" )=="true"; };
	this.GetPairedBtDevices = function() { return eval(prompt( "#", "App.GetPairedBTDevices(\f" )); };
	this.IsBtDevicePaired = function( name ) { return prompt( "#", "App.IsBtDevicePaired(\f"+name )=="true"; };
	this.DiscoverBtDevices = function( filter,onFound,onComplete ) { prompt( "#", "App.DiscoverBtDevices(\f"+filter+"\f"+_Cbm(onFound)+"\f"+_Cbm(onComplete) ); };
	this.PairBtDevice = function( address,callback ) { prompt( "#", "App.PairBtDevice(\f"+address+"\f"+_Cbm(callback) ); };
	this.UnpairBtDevice = function( address,callback ) { prompt( "#", "App.UnpairBtDevice(\f"+address+"\f"+_Cbm(callback) ); };
	this.GetBtProfileState = function( type ) { return prompt( "#", "App.GetBtProfileState(\f"+type ); };
	this.GetBluetoothName = function() { return prompt( "#", "App.GetBluetoothName(" ); };
	this.GetBluetoothAddress = function() { return prompt( "#", "App.GetBluetoothAddress(" ); };
	this.IsLocationEnabled = function( types ) { return prompt( "#", "App.IsLocationEnabled(\f"+types )=="true"; };
	this.PlayRingtone = function( type ) { prompt( "#", "App.PlayRingtone(\f"+type ); };
	this.SetRingerMode = function( mode ) { prompt( "#", "App.SetRingerMode(\f"+mode ); };
	this.GetRingerMode = function() { return prompt( "#", "App.GetRingerMode(" ); };
	this.SetSpeakerPhone = function( on ) { prompt( "#", "App.SetSpeakerPhone(\f"+on ); };
	this.GetSpeakerPhone = function() { return prompt( "#", "App.GetSpeakerPhone(" )=="true"; };
	this.SetVolume = function( stream,level ) { prompt( "#", "App.SetVolume(\f"+stream+"\f"+level ); };
	this.GetVolume = function( stream ) { return parseFloat(prompt( "#", "App.GetVolume(\f"+stream )); };
	this.SetTitle = function( title ) { prompt( "#", "App.SetTitle("+title ); };
	this.SetMenu = function( list,iconPath ) { prompt( "#", "App.SetMenu("+list+"\f"+iconPath ); };
	this.ShowMenu = function() { prompt( "#", "App.ShowMenu(" ); };
	this.AddLayout = function( layout ) { prompt( "#", "App.AddLayout("+layout.id ); };
	this.RemoveLayout = function( layout ) { prompt( "#", "App.RemoveLayout("+ layout.id ); };
	this.DestroyLayout = function( layout ) { prompt( "#", "App.DestroyLayout("+ layout.id ); };
	this.AddDrawer = function( layout,side,width,grabWidth ) { prompt( "#", "App.AddDrawer(\f"+layout.id+"\f"+side+"\f"+width+"\f"+grabWidth ); };
	this.RemoveDrawer = function( layout ) { prompt( "#", "App.RemoveDrawer(\f"+ layout.id ); };
	this.DestroyDrawer = function( layout ) { prompt( "#", "App.DestroyDrawer(\f"+ layout.id ); };
	this.OpenDrawer = function( side ) { prompt( "#", "App.OpenDrawer(\f"+side ); };
	this.CloseDrawer = function( side ) { prompt( "#", "App.CloseDrawer(\f"+side ); };
	this.LockDrawer = function( side ) { prompt( "#", "App.LockDrawer(\f"+side ); };
	this.UnlockDrawer = function( side ) { prompt( "#", "App.UnlockDrawer(\f"+side ); };
	this.MakeFolder = function( fldr ) { prompt( "#", "App.MakeFolder("+fldr ); };
	this.GetPrivateFolder = function( name ) { return prompt( "#", "App.GetPrivateFolder(\f"+name ); };
	this.GetDatabaseFolder = function() { return prompt( "#", "App.GetDatabaseFolder(" ); };
	this.DeleteDatabase = function( name ) { prompt( "#", "App.DeleteDatabase(\f"+name); };
	this.FolderExists = function( fldr ) { return prompt( "#", "App.FolderExists("+fldr )=="true"; };
	this.FileExists = function( file ) { return prompt( "#", "App.FileExists("+file )=="true"; };
	this.IsFolder = function( fldr ) { return prompt( "#", "App.IsFolder("+fldr )=="true"; };
	this.ListFolder = function( path,filter,limit,options ) { return eval(prompt( "#", "App.ListFolder(\f"+path+"\f"+filter+"\f"+limit+"\f"+options )); };
	this.GetExternalFolder = function() { return prompt( "#", "App.GetExternalFolder(" ); };
	this.GetInternalFolder = function() { return prompt( "#", "App.GetInternalFolder(" ); };
	this.GetSpecialFolder = function( name ) { return prompt( "#", "App.GetSpecialFolder(\f"+name ); };
	this.GetEnv = function( name ) { return prompt( "#", "App.GetEnv(\f"+name ); };
	this.ReadFile = function( file,encoding ) { return prompt( "#", "App.ReadFile(\f"+file+"\f"+encoding ); };
	this.WriteFile = function( file,text,mode,encoding ) { prompt( "#", "App.WriteFile(\f"+file+"\f"+text+"\f"+mode+"\f"+encoding ); };
	this.OpenFile = function( file,type,choose ) { prompt( "#", "App.OpenFile(\f"+file+"\f"+type+"\f"+choose ); };
	this.OpenUrl = function( url,type,choose ) { prompt( "#", "App.OpenUrl(\f"+url+"\f"+type+"\f"+choose ); };
	this.DownloadFile = function( src,dest,title,desc,options ) { prompt( "#", "App.DownloadFile(\f"+src+"\f"+dest+"\f"+title+"\f"+desc+"\f"+options ); };
	this.ChooseFile = function( msg,type,callback ) { prompt( "#", "App.ChooseFile(\f"+msg+"\f"+type+"\f"+_Cbm(callback) ); };
	this.ChooseContact = function( type,callback ) { prompt( "#", "App.ChooseContact(\f"+type+"\f"+_Cbm(callback) ); };
	this.DeleteFile = function( file ) { prompt( "#", "App.DeleteFile("+file); };
	this.CopyFile = function( src,dest ) { prompt( "#", "App.CopyFile("+src+"\f"+dest); };
	this.CopyFolder = function( src,dest,overwrite,filter ) { prompt( "#", "App.CopyFolder(\f"+src+"\f"+dest+"\f"+overwrite+"\f"+filter); };
	this.DeleteFolder = function( fldr ) { prompt( "#", "App.DeleteFolder("+fldr); };
	this.RenameFile = function( src,dest ) { prompt( "#", "App.RenameFile(\f"+src+"\f"+dest); };
	this.RenameFolder = function( src,dest ) { prompt( "#", "App.RenameFile(\f"+src+"\f"+dest); };
	this.UnzipFile = function( src,dest ) { prompt( "#", "App.UnzipFile(\f"+src+"\f"+dest); };
	this.ZipFile = function( src,dest ) { prompt( "#", "App.ZipFile(\f"+src+"\f"+dest); };
	this.ZipFolder = function( src,dest ) { prompt( "#", "App.ZipFile(\f"+src+"\f"+dest); };
	this.GetFreeSpace = function( mode ) { return parseFloat(prompt( "#", "App.GetFreeSpace(\f"+mode)); };
	this.GetFileDate = function( file ) { var d = parseInt(prompt( "#", "App.GetFileDate(\f"+file)); if( d ) return new Date(d); else return null; };
	this.GetFileSize = function( file ) { return parseInt(prompt( "#", "App.GetFileSize(\f"+file)); };
	this.GetThumbnail = function( src,dest,width,height ) { prompt( "#", "App.GetThumbnail(\f"+src+"\f"+dest+"\f"+width+"\f"+height); };
	this.ScanFile = function( file ) { prompt( "#", "App.ScanFile(\f"+file); };
	this.GetLastButton = function() { var ret = prompt( "#", "App.GetLastButton(" ); if( ret ) return (_map[ret]); else return null; };
	this.GetLastToggle = function() { var ret = prompt( "#", "App.GetLastToggle(" ); if( ret ) return (_map[ret]); else return null; };
	this.GetLastCheckBox = function() { var ret = prompt( "#", "App.GetLastCheckBox(" ); if( ret ) return (_map[ret]); else return null; };
	this.GetLastImage = function() { var ret = prompt( "#", "App.GetLastImage(" ); if( ret ) return (_map[ret]); else return null; };
	this.IsBluetoothOn = function() { return prompt( "#", "App.IsBluetoothOn(" )=="true"; };
	this.IsScreenOn = function() { return prompt( "#", "App.IsScreenOn(" )=="true"; };
	this.WakeUp = function() { prompt( "#", "App.WakeUp(" ); };
	this.Unlock = function() { prompt( "#", "App.Unlock(" ); };	
	this.Lock = function() { prompt( "#", "App.Lock(" ); };
	this.SetScreenBrightness = function( level ) { prompt( "#", "App.SetScreenBrightness(\f"+level); };
	this.SetKioskMode = function( mode,enable,options ) { prompt( "#", "App.SetKioskMode(\f"+mode+"\f"+enable+"\f"+options); };
	this.GetMetadata = function( file,keys ) { return prompt( "#", "App.GetMetadata(\f"+file+"\f"+keys); };
	this.SetAlarm = function( type,id,callback,time,interval,options ) { return prompt( "#", "App.SetAlarm(\f"+type+"\f"+id+"\f"+_Cbm(callback)+"\f"+time+"\f"+interval+"\f"+options); };
	this.Call = function( number ) { prompt( "#", "App.Call(\f"+number ); };
	this.SimulateTouch = function( obj,x,y,dir ) { prompt( "#", "App.SimulateTouch(\f"+obj.id+"\f"+x+"\f"+y+"\f"+dir ); };
	this.SimulateKey = function( obj,keyName,modifiers,pause ) { prompt( "#", "App.SimulateKey(\f"+obj.id+"\f"+keyName+"\f"+modifiers+"\f"+pause ); };
	this.GetJoystickState = function( id,key ) { return parseFloat(prompt( "#", "App.GetJoyState(\f"+id+"\f"+key)); };
	this.GetJoystickName = function( id ) { return prompt( "#", "App.GetJoyName(\f"+id); };
	this.SetJoystickOptions = function( options ) { prompt( "#", "App.SetJoystickOptions(\f"+options ); };
	this.SetAutoBoot = function( auto ) { prompt( "#", "App.SetAutoBoot(\f"+auto); };
	this.SetAutoWifi = function( auto ) { prompt( "#", "App.SetAutoWifi(\f"+auto); };
	this.SetAutoStart = function( appName ) { prompt( "#", "App.SetAutoStart(\f"+appName); };
	this.HttpRequest = function( type,baseUrl,path,params,callback,headers ) { prompt( "#", "App.HttpRequest(\f"+type+"\f"+baseUrl+"\f"+path+"\f"+params+"\f"+_Cbm(callback)+"\f"+headers); };
	this.UploadFile = function( url,file,name,callback ) { prompt( "#", "App.UploadFile(\f"+url+"\f"+file+"\f"+name+"\f"+_Cbm(callback) ); };
	this.SaveCookies = function() { prompt( "#", "App.SaveCookies(" ); };
	this.ClearCookies = function( session ) { prompt( "#", "App.ClearCookies(\f"+session ); };
	this.SetUserAgent = function( agent ) { prompt( "#", "App.SetUserAgent(\f"+agent ); };
    this.SetUserCreds = function( name,password ) { prompt( "#", "App.SetUserCreds(\f"+name+"\f"+password ); };
    this.QueryContent = function( uri,columns,select,args,sort ) { return eval(prompt( "#", "App.QueryContent(\f"+uri+"\f"+columns+"\f"+select+"\f"+args+"\f"+sort)); };
	this.Uri2Path = function( uri ) { return prompt( "#", "App.Uri2Path(\f"+uri); };
	
	//These objects auto-release when layout is destroyed.		
	this.CreateLayout = function( type,options ) { var ret = prompt( "#", "App.CreateLayout("+type+"\f"+options ); if( ret ) return new Lay(ret); else return null; };
	this.CreateImage = function( file,width,height,options,w,h ) { var ret = prompt( "#", "App.CreateImage("+file+"\f"+width+"\f"+height+"\f"+options+"\f"+w+"\f"+h );  if( ret ) return new Img(ret); else return null; };
	this.CreateButton = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateButton("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Btn(ret); else return null;  };
	this.CreateToggle = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateToggle("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Tgl(ret); else return null;  };		
	this.CreateCheckBox = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateCheckBox("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Chk(ret); else return null;  };
	this.CreateSpinner = function( list,width,height,options ) { var ret = prompt( "#", "App.CreateSpinner("+list+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Spn(ret); else return null; };
	this.CreateSeekBar = function( width,height,options ) { var ret = prompt( "#", "App.CreateSeekBar("+width+"\f"+height+"\f"+options ); if( ret ) return new Skb(ret); else return null; };
	this.CreateText = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateText("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Txt(ret); else return null; };
	this.CreateTextEdit = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateTextEdit("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Txe(ret); else return null; };
	this.CreateList = function( list,width,height,options ) { var ret = prompt( "#", "App.CreateList("+list+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Lst(ret); else return null; };
	this.CreateWebView = function( width,height,options,zoom ) { var ret = prompt( "#", "App.CreateWeb(\f"+width+"\f"+height+"\f"+options+"\f"+zoom ); if( ret ) return new Web(ret); else return null; };
	this.CreateScroller = function( width,height,options ) { var ret = prompt( "#", "App.CreateScroller("+width+"\f"+height+"\f"+options ); if( ret ) return new Scr(ret); else return null; };
	this.CreateCameraView = function( width,height,options ) { var ret = prompt( "#", "App.CreateCameraView("+width+"\f"+height+"\f"+options );  if( ret ) return new Cam(ret); else return null; };
	this.CreateVideoView = function( width,height,options ) { var ret = prompt( "#", "App.CreateVideoView(\f"+width+"\f"+height+"\f"+options );  if( ret ) return new Vid(ret); else return null; };
	this.CreateWebGLView = function( width,height,options ) { var ret = prompt( "#", "App.CreateWebGLView(\f"+width+"\f"+height+"\f"+options );  if( ret ) return new WGL(ret); else return null; };
	this.CreateCodeEdit = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateCodeEdit(\f"+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Cde(ret); else return null; };
	this.CreateTheme = function( baseTheme ) { var ret = prompt( "#", "App.CreateTheme(\f"+baseTheme ); if( ret ) return new Thm(ret); else return null;  };
	
	//These objects auto-release (ie. single instance)
	this.CreateYesNoDialog = function( msg,options ) { if( _ynd ) _ynd.Release(); var ret = prompt( "#", "App.CreateYesNoDialog(\f"+msg+"\f"+options ); if( ret ) _ynd = new Ynd(ret); else _ynd = null; return _ynd; };
	this.CreateListDialog = function( title,list,options ) { if( _ldg ) _ldg.Release(); var ret = prompt( "#", "App.CreateListDialog(\f"+title+"\f"+list+"\f"+options ); if( ret ) _ldg = new Ldg(ret); else _ldg = null; return _ldg; };
	this.CreateListView = function( list,title,options ) { if( _lvw ) _lvw.Release(); var ret = prompt( "#", "App.CreateListView(\f"+list+"\f"+title+"\f"+options ); if( ret ) _lvw = new Lvw(ret); else _lvw = null; return _lvw; };
	this.CreateBluetoothList = function( filter ) { if( _btl ) _btl.Release(); var ret = prompt( "#", "App.CreateBluetoothList("+filter ); if( ret) _btl = new Btl(ret); else _btl = null; return _btl; };
	this.CreateAudioRecorder = function() { if( _rec ) _rec.Release(); var ret = prompt( "#", "App.CreateAudioRecorder(" ); if( ret) _rec = new Rec(ret); else _rec = null; return _rec; };
	this.CreateSMS = function() { if( _sms ) _sms.Release(); var ret = prompt( "#", "App.CreateSMS(" ); if( ret) _sms = new SMS(ret); else _sms = null; return _sms; };
	this.CreateEmail = function( account,password ) { if( _eml ) _eml.Release(); var ret = prompt( "#", "App.CreateEmail("+account+"\f"+password ); if( ret) _eml = new EMAIL(ret); else _eml = null; return _eml; };
	this.CreateSmartWatch = function( type ) { if( _smw ) _smw.Release(); var ret = prompt( "#", "App.CreateSmartWatch(\f"+type ); if( ret) _smw = new SMW(ret); else _smw = null; return _smw; };
	this.CreateCrypt = function( options ) { if( _crp ) _crp.Release(); var ret = prompt( "#", "App.CreateCrypt(\f"+options ); if( ret) _crp = new Crp(ret); else _crp = null; return _crp; };
	this.CreateSpeechRec = function( options ) { if( _spr ) _spr.Release(); var ret = prompt( "#", "App.CreateSpeechRec(\f"+options ); if( ret) _spr = new Spr(ret); else _spr = null; return _spr; };
	this.CreatePhoneState = function( types ) { if( _pst ) _pst.Release(); var ret = prompt( "#", "App.CreatePhoneState(\f"+types ); if( ret) _pst = new Pst(ret); else _pst = null; return _pst; };
	
	//These objects need releasing manually.
	this.CreateDialog = function( title,options ) { var ret = prompt( "#", "App.CreateDialog(\f"+title+"\f"+options ); if( ret ) return new Dlg(ret); else return null; };
	this.CreateMediaPlayer = function() { var ret = prompt( "#", "App.CreateMediaPlayer(" ); if( ret ) return new Aud(ret); else return null; };
	this.CreateSensor = function( type,options ) { var ret = prompt( "#", "App.CreateSensor("+type+"\f"+options ); if( ret ) return new Sns(ret); else return null; };
	this.CreateLocator = function( type,options ) { var ret = prompt( "#", "App.CreateLocator("+type+"\f"+options ); if( ret ) return new Loc(ret); else return null; };		
	this.CreateNetClient = function( type ) { var ret = prompt( "#", "App.CreateNetClient("+type ); if( ret ) return new Net(ret); else return null; };
	this.CreateNxtRemote = function() { var ret = prompt( "#", "App.CreateNxtRemote(" ); if( ret ) return new Nxt(ret,null); else return null; };
	this.CreateWebServer = function( port,options ) { var ret = prompt( "#", "App.CreateWebServer("+port+"\f"+options ); if( ret ) return new Wbs(ret); else return null; };
	this.CreateUSBSerial = function( baudRate,dataBits,stopBits,parity,device ) { var ret = prompt( "#", "App.CreateUSBSerial(\f"+baudRate+"\f"+dataBits+"\f"+stopBits+"\f"+parity+"\f"+device ); if( ret ) return new Usb(ret); else return null; };
	this.CreateSysProc = function( cmd ) { var ret = prompt( "#", "App.CreateSysProc(\f"+cmd ); if( ret ) return new Sys(ret); else return null; };
	this.CreateService = function( packageName,className,callback,options ) { var ret = prompt( "#", "App.CreateService(\f"+packageName+"\f"+className+"\f"+options+"\f"+_Cbm(callback) ); if( ret ) return new Svc(ret); else return null; };
	this.CreateObject = function( name ) { try { return eval( "new "+name+"()" ); } catch(e) { return null; } };
	this.CreateSynth = function( type ) { var ret = prompt( "#", "App.CreateSynth("+type ); if( ret ) return new Syn(ret); else return null; };
	this.CreateBluetoothSerial = function( mode ) { var ret = prompt( "#", "App.CreateBluetoothSerial(\f"+mode ); if( ret ) return new Bts(ret); else return null; };
	this.CreateZipUtil = function( mode ) { var ret = prompt( "#", "App.CreateZipUtil(\f"+mode ); if( ret ) return new Zip(ret); else return null; };
	this.CreateDownloader = function( options ) { var ret = prompt( "#", "App.CreateDownloader(\f"+options ); if( ret ) return new Dwn(ret); else return null; };
	this.CreateMediaStore = function() { var ret = prompt( "#", "App.CreateMediaStore(" ); if( ret ) return new Med(ret); else return null; };
	this.CreatePlayStore = function() { var ret = prompt( "#", "App.CreatePlayStore(" ); if( ret ) return new Ply(ret); else return null; };
	this.CreateNotification = function( options ) { var ret = prompt( "#", "App.CreateNotification(\f"+options ); if( ret ) return new Not(ret); else return null; };
	this.CreateFile = function( file,mode ) { var ret = prompt( "#", "App.CreateFile(\f"+file+"\f"+mode ); if( ret ) return new Fil(ret); else return null; };
	
	//Special methods.
	this.Start = function() { if(typeof OnStart=='function') { OnStart(); prompt("#","_Start"); } };
	
	this.GA = function( cmd )
	{
		try {
			if( cmd.toLowerCase()=='create' ) {
				_LoadScriptSync( "/Sys/ga.js" );
				window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date();
				var dbg = _dbg; app.SetDebugEnabled( false );
				ga('create', arguments[1], {'storage':'none', 'clientId':app.GetDeviceId()});
				ga('set', { checkProtocolTask: null, checkStorageTask: null });
				app.SetDebugEnabled( dbg );
			}
			else ga.apply( this, arguments );
		}
		catch(e){}
	};
	
	var _anim_t = 0;
	function _animatev8() {if(_cbAnimate) {var t=new Date().getTime(); _cbAnimate(t,t-_anim_t); _anim_t=t;}}
	function _animate() {if(_cbAnimate) {var t=new Date().getTime(); _cbAnimate(t,t-_anim_t); _anim_t=t; requestAnimationFrame(_animate);}}
	this.Animate = function( callback,fps )
	{
		_cbAnimate = callback;
		_anim_t = new Date().getTime();
		if( _isV8 ) {
			_fps=(fps?fps:30);
			if( _cbAnimate ) _tmAnimate = setInterval( _animatev8, 1000/_fps );
			else if( _tmAnimate ) clearInterval( _tmAnimate );
		}
		else {
			window._fps=(fps?fps:30); 
			requestAnimationFrame(_animate); 
		}
	};
	
	this.Language2Code = function(name) { 
		if( name ) return _languages.codes[name.toLowerCase()]; 
		else return _curLang; 
	};

	this.SetLanguage = function( name ) { 
		var json = app.ReadFile( "lang.json" );
		_languages = JSON.parse(json);
		_curLang = _languages.codes[name.toLowerCase()];
	};

	//Helper classes.
	this.CreateNxt = function() { var nxtHelp = new _NxtHelp(); return nxtHelp.nxt_CreateNxt(); };
	this.CreateTabs = function( list,width,height,options ) { return new _Tabs( list,width,height,options ); };
	this.CreateWebSocket = function( id,ip,port,options ) { return new _WebSock( id,ip,port,options ); };
	
	//Hybrid objects.
	this.CreateGLView = function( width,height,options ) 
	{
	    var glv = null;
	    if( options.toLowerCase().indexOf("fast2d") > -1 )
	    {
			_LoadScriptSync( "/Sys/cp.js" );
    		_LoadScriptSync( "/Sys/gl.js" );
    		glv = new GLV( prompt( "#", "App.CreateGLView(\f"+width+"\f"+height+"\f"+options ));
    		glv.canvas = FastCanvas.create(); 
    		glv.ctx = glv.canvas.getContext("2d");
    		glv.width = Math.round(app.GetDisplayWidth()*width);
    		glv.height = Math.round(app.GetDisplayHeight()*height);
    		glv.aspect = glv.width / glv.height;
    		glv.GetType = function() { return "GLView"; };
	    }
		return glv;
	};
	
	this.OpenDatabase = function( name ) 
	{
		_LoadScriptSync( "/Sys/cp.js" );
		_LoadScriptSync( "/Sys/sql.js" );
		_CreateCP( "sqliteplugin" );
		
		var db = sqlitePlugin.openDatabase( name );
		db.name = name;
	    
	    db.GetType = function() { return "Database"; };
	    db.GetName = function() { return db.name; };
		db.ExecuteSql = function( sql, params, success, error ) 
		{
			if( !success ) success = null;
			if( !error ) error = _Err;
	      
			db.transaction( function(tx) { 
				tx.executeSql( sql, params, 
					function(tx,res) { if(success) success.apply(db,[res]) }, 
					function(t,e) { error.apply(db,[e.message]); } 
				); }, error
			);
		};
		db.Close = function() { db.close( _Log, _Err ); };
		db.Delete = function() { sqlitePlugin.deleteDatabase(db.name,_Log,_Err); };
		return db;
	};
}
