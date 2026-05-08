const StyleBackground = ({ $bg_image, className, children }) => (
  <section className={`relative overflow-hidden flex flex-col justify-center self-center ${className}`}
    style={{ minHeight: '100vh' }}
  >
    {$bg_image && (
      <img
        src={$bg_image}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    )}
    <div className="absolute inset-0" style={{
      background: 'linear-gradient(rgb(0 0 0 / 80%), rgb(24 30 72 / 50%))'
    }} />
    <div className="relative z-10 w-full">
      {children}
    </div>
  </section>
)

export default StyleBackground
