// Middleware function for extracting IP address and device type from incoming requests
const getIPAddressAndDeviceType = (req, res, next) => {
  // Extracting IP address from the request object
  const ip_address = req.ip;
  // Extracting device type from the request headers
  const device = req.headers["user-agent"];
  // Storing extracted IP address and device type in the request object for later use
  req.info = {
    ip_address,
    device,
  };
  // Calling the next middleware function
  next();
};

module.exports = getIPAddressAndDeviceType;
