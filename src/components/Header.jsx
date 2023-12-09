import PropTypes from "prop-types";

export default function Header({ value }) {
    return (
        <header className="p-4 border-y border-slate-300 sticky top-0 bg-white/90">
            <span href="#" className="text-xl font-bold">
                {value}
            </span>
        </header>
    );
}

Header.propTypes = {
    value: PropTypes.string.isRequired,
}
