export function forgetCompletedLevels(navigate?: (path: string) => void) {
  localStorage.clear();
  if (navigate)
    navigate('/about')
  window.location.reload();
}