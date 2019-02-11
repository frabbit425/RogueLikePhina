function ckSave(nam,val,term)
{
  if (navigator.cookieEnabled)
  {
    var date = new Date();

    try
    {
      term = parseInt(term);
    }
    catch(e)
    {
      term = 30;
    }
      
    date.setTime(date.getTime()+term*24*60*60*1000);
    
    document.cookie = nam+"="+escape(val)+";expires="+date.toGMTString();
    
    return true;
  }
  else
  {
    return false;
  }
}


function ckLoad(nam)
{
  if (navigator.cookieEnabled)
  {
    var cook = document.cookie +";";
    
    nam=nam+"=";

    var cStart,cEnd;
    cStart = cook.indexOf(nam,0);
    
    if (cStart == -1)
    {
      return "nodata";
    }
    else
    {
      cEnd = cook.indexOf(";",cStart);
      return unescape(cook.substring(cStart+nam.length,cEnd));
    }
  }
  else
  {
    return "nodata";
  }
}


function ckDelete(nam)
{
  if ( navigator.cookieEnabled )
  {
    var date = new Date();
    date.setTime(0);
    
    document.cookie=nam+"=;expires="+date.toGMTString();
    return true;
  }
  else
  {
    return false;
  }
}
