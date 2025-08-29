export interface User {
  id: string
  email: string
  name: string
  role: "student" | "company" | "admin" | "department"
}

export const getCurrentUser = (): User | null => {
  if (typeof window === "undefined") return null

  const userStr = localStorage.getItem("user")
  if (!userStr) return null

  try {
    return JSON.parse(userStr)
  } catch {
    return null
  }
}

export const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user")
    window.location.href = "/"
  }
}

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null
}
