
// ExStart:Read3DScene
var aspose = aspose || {};

aspose.threed = require("aspose.3d");

// Initialize a Scene class object
var scene = new aspose.threed.Scene();

// Load an existing 3D document
scene.open("document.obj");
// ExEnd:Read3DScene