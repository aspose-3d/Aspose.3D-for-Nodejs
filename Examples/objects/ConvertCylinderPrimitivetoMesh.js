
// ExStart:ConvertCylinderPrimitivetoMesh
var aspose = aspose || {};

aspose.threed = require("aspose.3d");

// Initialize object by Cylinder class
var convertible = new aspose.threed.Cylinder();

// Convert a Cylinder to Mesh
var mesh = convertible.toMesh();
// ExEnd:ConvertCylinderPrimitivetoMesh