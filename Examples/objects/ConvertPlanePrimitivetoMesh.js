
// ExStart:ConvertPlanePrimitivetoMesh
var aspose = aspose || {};

aspose.threed = require("aspose.3d");

// Initialize object by Plane class
var convertible = new aspose.threed.Plane();

// Convert a Plane to Mesh
var mesh = convertible.toMesh();
// ExEnd:ConvertPlanePrimitivetoMesh