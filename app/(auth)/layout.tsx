import '../globals.css'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return <html>
        <body>
            

        <h1>Auth page layout</h1>
        {children}
        </body>
    </html>;
};

export default HomeLayout;
