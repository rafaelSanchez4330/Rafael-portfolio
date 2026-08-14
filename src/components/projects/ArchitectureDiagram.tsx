export function ArchitectureDiagram() {
  return (
    <div
      className="architecture"
      role="img"
      aria-label="Web browser communicates over HTTP with a Raspberry Pi Pico W. Its HTTP server, REST API and outlet manager control a relay module through GPIO, which controls multiple outlets."
    >
      <div className="architecture__node architecture__node--accent">
        Web Browser
      </div>
      <div className="architecture__connector">
        <span>HTTP</span>
      </div>
      <div className="architecture__device">
        <strong>Raspberry Pi Pico W</strong>
        <div className="architecture__services">
          <span>HTTP Server</span>
          <span>REST API</span>
          <span>Outlet Manager</span>
        </div>
      </div>
      <div className="architecture__connector">
        <span>GPIO</span>
      </div>
      <div className="architecture__node">Relay Module</div>
      <div className="architecture__branches" aria-hidden="true" />
      <div className="architecture__outlets">
        <span>Outlet 1</span>
        <span>Outlet 2</span>
        <span>Outlet N</span>
      </div>
    </div>
  )
}
