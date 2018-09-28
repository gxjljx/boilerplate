export default {
  fetch(url,method, param,header,start,success,compelete,exception) {
    let stream=weex.requireModule('stream')
    start()
    stream.fetch({
      method: method,
      url: url,
      type:'json',
      headers:header,
      body:JSON.stringify(param)
    }, function(ret) {
      if(!ret.ok){
        exception(ret)
      }else{
         success(ret.data)
      }
    },function(response){
      console.log('get in progress:'+response.length);
    });
  },
  postJson(url, param,header,start,success,compelete,exception) {
   this.fetch(url,'POST', param,header,start,success,compelete,exception)
  },
  get(url, param,header,start,success,compelete,exception) {
    this.fetch(url,'GET', param,header,start,success,compelete,exception)
  },
  postFile(url, param,header,path,start,success,compelete,exception)
  {
  },
  getSessionId( url){

  },
  removeAllCookies(){

  },
  download(url,process,compelete,exception){

  }

}