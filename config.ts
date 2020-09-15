const siteMetadata = {
    title: `TEDx AoyamaGakuinU`,
    siteUrl: `https://www.tedxagu.com`,
    capitalizeTitleOnHome: false,
    logo: `/images/rebeat2.jpg.PNG`,
    icon: `/images/icon.png`,
    titleImage: `/images/rebeat.jpg`,
    ogImage: `/images/rebeat.jpg`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `Date | 2020-10-18 (sun)         Site | オンライン開催`,
    description: `Coming soon...`,
    about:
        "物・文化・思想...時代の流れや社会情勢などの様々な理由により、価値が薄れている、忘れられているものがある。 今回のテーマは、Rebeat !! 本来の価値の再発見＋既存・新価値の未来への共有。そして、Rebeatに関わる全員が自身の能力・個性を再発見し、「その人らしいアクション」のきっかけ作りを。 ",
    author: `@_akzhy`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "ABOUT",
            url: "/about",
        },
        {
            name: "SPEAKERS",
            url: "/blog",
        },
        {
            name: "TIME SCHEDULE",
            url: "/portfolio/TEDxAoyamaGakuinU Time schedule",
        },
        {
            name: "CONTACT",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy",
        },
        {
            name: "GitHub",
            url: "https://github.com/akzhy/gatsby-starter-elemental",
        },
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/tedxaogaku17/",
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/tedxagu?s=21",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://instagram.com/tedxaoyamagakuinu?igshid=17n9yepjk79dy",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://getform.io/f/f227a36e-096a-4c6a-9963-9f1918a85bb3",
        description: `ーお問い合わせー`,
        mail: "tedxaoyamagakuinu2020@gmail.com",
        phone: "none",
        address: "none",
    },
    disqus: "elemental-netlify-com",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Enter a name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Enter a valid email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Enter a message with atleast 15 characters",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
