export function downloadFileFromURL(url: string, filename?: string) {
  const a = document.createElement('a')
  a.href = url
  a.download = filename ?? ''
  a.target = '_blank'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export function downloadFileFromBlob(blob: Blob | MediaSource, filename: string) {
  const a = document.createElement('a')
  const url = window.URL.createObjectURL(blob)
  a.href = url
  a.download = filename ?? ''
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  window.URL.revokeObjectURL(url)
}
