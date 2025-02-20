function Footer() {
    return (
        <footer className="fixed bottom-0 z-20 left-0 w-full bg-gray-800 text-white py-4 text-center">
            <p className="text-sm">© {new Date().getFullYear()} POS. All Rights Reserved.</p>
        </footer>
    );
}
export default Footer