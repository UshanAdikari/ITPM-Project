/*const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

var storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "E-commerce",
    allowed_formats: ["jpg", "png", "jpeg", "gif"] // supports promises as well
  }
});

exports.productImages = function () {
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  const upload = multer({ storage: storage, fileFilter: fileFilter });

  return upload.array("productImage", 12);
};

// in case for images local storing
/* // Multer handling image upload Middleware at /api/product/create
exports.productImages = function () {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + "-" + Date.now() + ".jpg");
    }
  });

  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  upload = multer({ storage: storage, fileFilter: fileFilter });

  return upload.array("productImage", 12);
};
 */

const multer = require("multer");
const path = require("path");  // Add this for path manipulation

// Configure local storage
exports.productImages = function () {
  // Create storage engine for local file system
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/");  // Make sure this directory exists
    },
    filename: function (req, file, cb) {
      // Create unique filename with original extension
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
  });

  // File filter to only accept images
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || 
        file.mimetype === "image/gif") {
      cb(null, true);
    } else {
      cb(new Error("Unsupported file format"), false);
    }
  };

  // Set file size limits (optional)
  const limits = {
    fileSize: 5 * 1024 * 1024  // 5MB max file size
  };

  // Create and return the upload middleware
  const upload = multer({ 
    storage: storage, 
    fileFilter: fileFilter,
    limits: limits
  });

  return upload.array("productImage", 12);
};