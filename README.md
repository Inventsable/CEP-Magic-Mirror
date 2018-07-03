## MagicMirror
Framework for easily creating native-looking Adobe controls:
![Toolbar](https://thumbs.gfycat.com/ScratchyGoodBarebirdbat-size_restricted.gif)

Reads and updates current app theme:
![Theme Updates](https://thumbs.gfycat.com/NippyFrayedDassierat-size_restricted.gif)

Include adobeStyle.css and adobeMirror.js to your html:

`<link href="./myTstack/adobeStyle.css" type="text/css" rel="stylesheet">
...
<body>
...
<script src="./myTstack/CSInterface.js" type="text/javascript"></script>
<!-- adobeMirror must be below CSInterface -->
<script src="./myTstack/adobeMirror.js" type="text/javascript"></script>
...
</body>`

Based on class names:

`  <div class="adobe adobe-btn">
    <!-- Icon inside button -->
    <span class="fa fa-adjust fa-lg"></span>
  </div>`

`adobe` is a required class for all elements and the prefix, similar to FontAwesome.
