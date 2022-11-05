import Header from '@components/Header/Header';
import Foooter from '@components/Footer/Footer';
import AppHead from './Head';
type Props = {
    children: React.ReactNode;
    title?: string;
};

const Layout = ({ children, title }: Props) => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <AppHead title={title} />
                <Header />
                <main className="flex-grow pt-16">
                    {children}
                </main>
                <Foooter />
            </div>
        </>
    );
}

export default Layout;