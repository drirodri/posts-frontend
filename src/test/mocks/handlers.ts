import { http, HttpResponse } from "msw";

// Use the same API URL configuration as the actual app
const USERS_API_URL = import.meta.env.VITE_USERS_API_URL || "http://localhost:3000";

export const handlers = [
  // Register endpoint
  http.post(`${USERS_API_URL}/register`, async ({ request }) => {
    const body = (await request.json()) as any;

    if (!body.email || !body.password || !body.name) {
      return HttpResponse.json(
        {
          message: "Missing required fields",
          error: "Bad Request",
          statusCode: 400,
        },
        { status: 400 }
      );
    }

    return HttpResponse.json({
      message: "User registered successfully",
      data: {
        id: 1,
        name: body.name,
        email: body.email,
        role: "user",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });
  }),

  // Login endpoint
  http.post(`${USERS_API_URL}/auth/login`, async ({ request }) => {
    const body = (await request.json()) as any;

    if (!body.email || !body.password) {
      return HttpResponse.json(
        {
          message: "Missing credentials",
          error: "Bad Request",
          statusCode: 400,
        },
        { status: 400 }
      );
    }

    // Mock successful login
    if (body.email === "test@example.com" && body.password === "password123") {
      return HttpResponse.json(
        {
          message: "Login successful",
          data: {
            accessToken: "mock-access-token",
            refreshToken: "mock-refresh-token",
            user: {
              id: 1,
              name: "Test User",
              email: "test@example.com",
              role: "user",
            },
          },
        },
        {
          headers: {
            "Set-Cookie": "refreshToken=mock-refresh-token; HttpOnly; Path=/",
          },
        }
      );
    }

    return HttpResponse.json(
      {
        message: "Invalid credentials",
        error: "Unauthorized",
        statusCode: 401,
      },
      { status: 401 }
    );
  }),

  // Me endpoint
  http.get(`${USERS_API_URL}/auth/me`, ({ request }) => {
    const authHeader = request.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return HttpResponse.json(
        { message: "Unauthorized", error: "Unauthorized", statusCode: 401 },
        { status: 401 }
      );
    }

    return HttpResponse.json({
      message: "User retrieved successfully",
      data: {
        id: 1,
        name: "Test User",
        email: "test@example.com",
        role: "user",
        createdAt: "2023-01-01T00:00:00.000Z",
        updatedAt: "2023-01-01T00:00:00.000Z",
      },
    });
  }),

  // Refresh token endpoint
  http.post(`${USERS_API_URL}/auth/refresh`, () => {
    return HttpResponse.json({
      message: "Token refreshed successfully",
      data: {
        accessToken: "new-mock-access-token",
      },
    });
  }),

  // Logout endpoint
  http.post(`${USERS_API_URL}/auth/logout`, () => {
    return HttpResponse.json(
      {
        message: "Logout successful",
      },
      {
        headers: {
          "Set-Cookie":
            "refreshToken=; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
        },
      }
    );
  }),
];
