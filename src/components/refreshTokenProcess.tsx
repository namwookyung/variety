interface RefreshedData {
    accessToken: string;
    refreshToken?: string; // 서버가 리프레시 토큰도 반환하는 경우
  }
  
  async function refreshTokenProcess(refreshToken: string): Promise<string> {
    try {
      const refreshResponse = await fetch('http://localhost:3001/refresh-token', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'x-refresh-token': refreshToken
        }
      });
  
      if (refreshResponse.ok) {
        const refreshedData: RefreshedData = await refreshResponse.json();
        localStorage.setItem('token', refreshedData.accessToken);
        
        // 서버에서 새 리프레시 토큰을 반환하는 경우, 아래 라인을 사용
        if (refreshedData.refreshToken) {
          localStorage.setItem('refreshToken', refreshedData.refreshToken);
        }
        return refreshedData.accessToken;
      } else {
        throw new Error("리프레시 토큰 오류");
      }
    } catch (error) {
      if (error instanceof Error) {
        throw error; // 오류를 상위 호출자에게 전파
      }
      throw new Error('Unknown error occurred during token refresh');
    }
  }
  
  export default refreshTokenProcess;
