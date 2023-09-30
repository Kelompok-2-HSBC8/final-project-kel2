export default function Header({ value }) {
    return (
        <header className="p-4 border-y border-slate-300 sticky top-0 bg-white/90">
            <a href="#" className="text-xl font-bold">
                {value}
            </a>
        </header>
    );
}
