import styles from './Loader.module.css'

export default function Loader({
  size = 20,
  color = 'primary',
  loading = true
}) {
  const colors: Record<string, string> = {
    light: '#fff',
    dark: '#0E111B',
    primary: '#FDC000'
  }
  return (
    loading && (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderColor: colors[color] || color
        }}
        className={styles.loader}></div>
    )
  )
}
