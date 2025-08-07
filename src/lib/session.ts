// Session management utility
export const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const getOrCreateSessionId = (): string => {
  // Try to get existing session ID from localStorage
  let sessionId = localStorage.getItem('lead_capture_session_id');
  
  // If no session ID exists, create a new one
  if (!sessionId) {
    sessionId = generateSessionId();
    localStorage.setItem('lead_capture_session_id', sessionId);
  }
  
  return sessionId;
};

export const clearSessionId = (): void => {
  localStorage.removeItem('lead_capture_session_id');
}; 