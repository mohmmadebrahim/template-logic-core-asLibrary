export async function getToken(): Promise<string | null> {
    return `Bearer ${localStorage.getItem("token")}`;
}
