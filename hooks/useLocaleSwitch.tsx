import { createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const LocaleContext = createContext(null)

export const useLocale = () => useContext(LocaleContext)

export const LocaleProvider = ({ children }) => {
    const router = useRouter()
    const { locale, pathname, asPath, query } = router
    const toPL = () =>
        router.push({ pathname, query }, asPath, {
            locale: 'pl',
            scroll: false,
        })
    const toEN = () =>
        router.push({ pathname, query }, asPath, {
            locale: 'en',
            scroll: false,
        })
    const switchLocale = () => (locale === 'pl' ? toEN() : toPL())
    const localeEmoji =
        locale === 'pl' ? (
            <Image src="/british_flag.svg" width="40px" height="40px" />
        ) : (
            <Image src="/polish_flag.svg" width="40px" height="40px" />
        )
    return (
        <LocaleContext.Provider value={{ locale, switchLocale, localeEmoji }}>
            {children}
        </LocaleContext.Provider>
    )
}
