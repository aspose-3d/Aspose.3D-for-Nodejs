
// ExStart:Triangulate3DMesh
var aspose = aspose || {};

aspose.threed = require("aspose.3d");

var mesh= new aspose.threed.Cylinder().toMesh();

//Triangulate this quadrangle-based mesh to triangle-based
mesh = mesh.triangulate();

var scene = new aspose.threed.Scene(mesh);
// ExEnd:Triangulate3DMesh