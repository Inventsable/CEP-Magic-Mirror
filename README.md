## MagicMirror

Updated to mightyLayers:

![mightyLayers](https://thumbs.gfycat.com/VerifiableConstantDwarfmongoose-size_restricted.gif)

Framework for easily creating native-looking Adobe controls:

![Toolbar](https://thumbs.gfycat.com/ScratchyGoodBarebirdbat-size_restricted.gif)

Reads and updates current app theme:

![Theme Updates](https://thumbs.gfycat.com/NippyFrayedDassierat-size_restricted.gif)

Returns an appUI object with all related information. Object can be assigned new values and recolor all elements, or can rescan native UI to soft reset all elements:

![appUI](https://i.imgur.com/IxidmVz.png)

To use, include adobeStyle.css and adobeMirror.js to your html:

```html

<!-- adobeStyle.css included before any custom stylesheets -->
<link href="./myTstack/adobeStyle.css" type="text/css" rel="stylesheet">
...
<body>
...
<script src="./myTstack/CSInterface.js" type="text/javascript"></script>
<!-- magicMirror must be below CSInterface -->
<script src="./myTstack/magicMirror.js" type="text/javascript"></script>
...
</body>
```

Based on class names:

```html

<div class="adobe adobe-btn">
    <!-- Icon inside button -->
    <span class="fa fa-adjust fa-lg"></span>
  </div>
```

`adobe` is a required class for all elements and the prefix. I'll make a list of classes soon if any one expresses interest -- this supports toolbars, buttons, toolbar buttons, all texts, solo inputs, input groups with upDown controls (like stroke width), vertical and horizontal scrollbar, layer/action panel format, checkboxes, layer radios, limited font support as of yet.

Check the index.html of this directory to see it used in HTML in action. Notice there's practically no need to do any styling or extra Javascript in main.js or style.css, because all is procedurally done in magicMirror.js and adobeStyle.css.
