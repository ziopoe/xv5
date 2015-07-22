# xv5
HTML5 player for <strong>XVIDEOS</strong> with a bookmarklet

I just don't like flash player, when I can I try to avoid installing it, but one of my most-browsed website doesen't support HTML5 video player like the other major comperitor (xhamster).

With this very basic bookmarklet you just log in to the site, pick a video you want to see and click it, it will convert the standard flash player into an HTML5 one.

Obviously you will need an HTML5 compatible browser, here is a list:
<table>
<thead>
<tr>
  <th>Browser</th><th>Version</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Chrome</code></td><td>4.0</td>
</tr>
<tr>
  <td><code>Firefox</code></td><td>3.5</td>
</tr>
<tr>
  <td><code>Safari</code></td><td>4.0</td>
</tr>
<tr>
  <td><code>Opera</code></td><td>10.5</td>
</tr>
<tr>
  <td><code>Internet Explorer</code></td><td>9.0</td>
</tr>
</tbody>
</table>

## How to install

Just make a new bookmark and copy this code inside the URL section.
```javascript
javascript:(function(){$.getJSON("http://www.xvideos.com/video_download/"+id_video,function(e){if(e.LOGGED)if("string"==typeof e.ERROR)alert(e.ERROR);else if("string"!=typeof e.URL)alert("Unknown error");else{var t=document.getElementById("flash-player-embed").getAttribute("width");document.getElementById("content").removeChild(document.getElementById("player"));var n=document.createElement("video"),o=document.createElement("source");n.setAttribute("width",t),n.setAttribute("controls",""),o.setAttribute("src",e.URL),o.setAttribute("type","video/mp4"),n.appendChild(o),document.getElementById("content").appendChild(n)}else alert("Please log in to view this video.")})})();
```

## Does it work?

It does for now.

The script use variables already declared on the xvideo page, so if they will change it in the future it will break, if you want to help you can report it to me and i'll try to fix it.

