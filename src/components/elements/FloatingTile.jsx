// Small glassy icon tile that drifts gently; purely decorative
const FloatingTile = ({ icon: Icon, className = "", delay = "0s", variant = "glass" }) => (
    <span
        className={`float-tile float-tile--${variant} ${className}`}
        style={{ "--float-delay": delay }}
        aria-hidden="true"
    >
        <Icon />
    </span>
);

export default FloatingTile;
