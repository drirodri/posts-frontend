// Test file for auth services and functionality
import { AuthService } from "./services/auth";
import { AdminService } from "./services/admin";

// Test function to check auth service functionality
export async function testAuthService() {
  console.log("🧪 Testing Auth Service...");

  try {
    // Test 1: Check if API is accessible
    console.log("\n1️⃣ Testing API connection...");

    // Try to access a public endpoint (this might fail if no public endpoint exists)
    try {
      const response = await fetch("http://localhost:3333");
      console.log("✅ API is accessible:", response.status);
    } catch (error) {
      console.log("⚠️ Basic API connection failed, but this might be normal");
    }

    // Test 2: Test registration (if you want to create a test user)
    console.log("\n2️⃣ Testing user registration...");
    const testUser = {
      name: "Test User",
      email: `test.${Date.now()}@example.com`,
      password: "TestPassword123!",
    };

    try {
      const registerResponse = await AuthService.register(testUser);
      console.log("✅ Registration successful:", registerResponse);
    } catch (error) {
      console.log("❌ Registration failed:", error);
    }

    // Test 3: Test login with existing credentials
    console.log("\n3️⃣ Testing login...");
    try {
      const loginResponse = await AuthService.login({
        email: testUser.email,
        password: testUser.password,
      });
      console.log("✅ Login successful:", loginResponse);

      // Store token for subsequent tests
      AuthService.setAccessToken(loginResponse.accessToken);

      // Test 4: Test getting current user
      console.log("\n4️⃣ Testing getCurrentUser...");
      const currentUser = await AuthService.getCurrentUser();
      console.log("✅ Current user:", currentUser);

      // Test 5: Test token refresh
      console.log("\n5️⃣ Testing token refresh...");
      const refreshResponse = await AuthService.refreshToken();
      console.log("✅ Token refresh successful:", refreshResponse);
    } catch (error) {
      console.log("❌ Login/User operations failed:", error);
    }

    console.log("\n🎉 Auth Service tests completed!");
  } catch (error) {
    console.error("❌ Auth service test failed:", error);
  }
}

// Test admin service (requires admin credentials)
export async function testAdminService() {
  console.log("\n🔐 Testing Admin Service...");

  try {
    // This will only work if you're logged in as an admin
    const users = await AdminService.getAllUsers();
    console.log("✅ Admin - Get all users:", users);
  } catch (error) {
    console.log(
      "❌ Admin service failed (this is expected if not admin):",
      error
    );
  }
}

// Run tests
if (typeof window !== "undefined") {
  // Browser environment - can be called from console
  (window as any).testAuth = testAuthService;
  (window as any).testAdmin = testAdminService;
  console.log(
    "🔧 Auth tests available: call testAuth() or testAdmin() in console"
  );
}
