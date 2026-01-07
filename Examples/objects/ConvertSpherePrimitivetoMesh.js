
// ExStart:ConvertSpherePrimitivetoMesh
var aspose = aspose || {};

aspose.threed = require("aspose.3d");

// Initialize object by Sphere class
var convertible = new aspose.threed.Sphere();

// Convert a Sphere to Mesh
var mesh = convertible.toMesh();
// ExEnd:ConvertSpherePrimitivetoMesh