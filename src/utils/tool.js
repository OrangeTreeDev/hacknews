/**
 * Created by hubery on 2017/5/23.
 */

export function timeAgo (past){
  let pastTime = past * 1000;
  let nowTime = (new Date()).getTime();
  let diff = nowTime - pastTime;

  let day = Math.floor( diff/(24*3600*1000) );

  let dayMod = diff % (24*3600*1000);
  let hours = Math.floor( dayMod / (3600 * 1000) ) ;

  let hoursMod = dayMod % (3600 * 1000);
  let minutes = Math.floor( hoursMod / (60 * 1000) ) ;

  let minutesMod = hoursMod % (60 * 1000);
  let seconds = Math.floor( minutesMod / 1000  ) ;

  let times = [day , hours, minutes, seconds];
  let units = ['day', 'hour', 'minute', 'second'];
  let timeAgo;
  for (let i =0 ; i<times.length; i++){

    if (times[i] != 0 ){
      timeAgo = `${times[i]} ` + (times[i] > 1 ? `${units[i]}s` : units[i] );
      break;
    }
  }
  return timeAgo;
}
