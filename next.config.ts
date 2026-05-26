import type { NextConfig } from "next";
import { networkInterfaces, type NetworkInterfaceInfo } from "node:os";

function isLocalIpv4(address: NetworkInterfaceInfo | undefined): address is NetworkInterfaceInfo {
  return Boolean(address && address.family === "IPv4" && !address.internal);
}

const localNetworkHosts = Object.values(networkInterfaces()).flat().filter(isLocalIpv4).map((address) => address.address);

const devOrigins = ["localhost", "localhost:3000", "127.0.0.1", "127.0.0.1:3000", ...localNetworkHosts, ...localNetworkHosts.map((host) => `${host}:3000`)];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: devOrigins,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
