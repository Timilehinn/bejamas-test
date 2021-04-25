import Lady from '../images/lady.jpg'
import ubuntuwall from '../images/ubuntuwall.jpg'
import one from '../images/1.jpg'
import two from '../images/2.jpg'
// import three from '../images/3.jpg'
import four from '../images/4.jpg'
import five from '../images/5.jpg'
import six from '../images/6.jpg'
import seven from '../images/7.jpg'
import eight from '../images/8.jpg'
import nine from '../images/9.jpg'
// import ten from '../images/10.jpg'
import eleven from '../images/11.jpg'
import twelve from '../images/12.jpg'
import thir from '../images/13.jpg'
import fourtn from '../images/14.jpg'
import fiftn from '../images/15.jpg'
import sixtn from '../images/16.jpg'
import svntn from '../images/17.jpg'
import eigtn from '../images/18.jpg'
import twnty from '../images/20.jpg'
import { v4 } from 'uuid';
/* Since the testers pc might not be configured to run postgres locally, I'm using this as a 
replacement for postgres/graphql */
/* 
 db schema will structured as: for psql
    -- for the products table
    CREATE TABLE products
    (id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(200) NOT NULL,
    category VARCHAR(200) NOT NULL,
    price TEXT,
    currency TEXT,
    image JSONB,
    bestseller BOOL NOT NULL,
    featured BOOL,
    details JSONB,
    date_added VARCHAR(200) NOT NULL, 
    time_added VARCHAR(200) NOT NULL,
*/


// the images do not match the category names

const db = {
    products: [
        {
        id:v4(),
        name:"Ubuntu Wallpaper",
        category:'premium',
        price:'301.45',
        currency:'USD',
        image:{
            src:ubuntuwall,
            alt:''
        },
        bestseller:true,
        featured:true,
        details:{
            dimensions:{
                width:'1020',
                height:'1020'
            },
            size:'13000',
            description:'Ubuntu wallpaper is an original copy of the Ubuntu Linux distro... Lorem ipsum tien ferr manne ritne ti lare oelle fen tien ur suni puret laci dien mer ti polonci elle fer re cielle',
            recommendations:[
                {
                    src:'',
                    alt:''
                },
                {
                    src:'',
                    alt:''
                },
                {
                    src:'',
                    alt:''
                },
            ]
        }
        },
        {
            id:1,
            name:"Lady Swimming",
            category:'people',
            price:'150',
            currency:'USD',
            image:{
                src:Lady,
                alt:''
            },
            bestseller:true,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        {
            id:2,
            name:"Schematic (Black & White)",
            category:'premium',
            price:'100.50',
            currency:'USD',
            image:{
                src:one,
                alt:''
            },
            bestseller:false,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        {
            id:3,
            name:"Saluki in collar on leash",
            category:'pet',
            price:'16.88',
            currency:'USD',
            image:{
                src:two,
                alt:''
            },
            bestseller:false,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        {
            id:4,
            name:"Rattle Snake",
            category:'pet',
            price:'88.4',
            currency:'USD',
            image:{
                src:four,
                alt:''
            },
            bestseller:false,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        {
            id:5,
            name:"Black Lives Matter",
            category:'people',
            price:'344.22',
            currency:'USD',
            image:{
                src:five,
                alt:''
            },
            bestseller:false,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        {
            id:6,
            name:"Rick and Morty",
            category:'nature',
            price:'110.00',
            currency:'USD',
            image:{
                src:six,
                alt:''
            },
            bestseller:false,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        {
            id:7,
            name:"Tupac - Keep ya Head Up",
            category:'food',
            price:'34.99',
            currency:'USD',
            image:{
                src:seven,
                alt:''
            },
            bestseller:false,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        {
            id:8,
            name:"Red Dead Redemption",
            category:'landmarks',
            price:'30',
            currency:'USD',
            image:{
                src:eight,
                alt:''
            },
            bestseller:false,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        {
            id:9,
            name:"Black and White Grffiti",
            category:'cities',
            price:'9.22',
            currency:'USD',
            image:{
                src:nine,
                alt:''
            },
            bestseller:false,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        {
            id:10,
            name:"GTA Graffiti",
            category:'cities',
            price:'170.05',
            currency:'USD',
            image:{
                src:nine,
                alt:''
            },
            bestseller:false,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        {
            id:11,
            name:"A Stairway on a Church Facade",
            category:'landmarks',
            price:'7.20',
            currency:'USD',
            image:{
                src:eleven,
                alt:''
            },
            bestseller:true,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        {
            id:12,
            name:"Tupac Quote",
            category:'people',
            price:'75',
            currency:'USD',
            image:{
                src:twelve,
                alt:''
            },
            bestseller:false,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        {
            id:13,
            name:"Elliot - Mr Robot",
            category:'landmarks',
            price:'2.99',
            currency:'USD',
            image:{
                src:thir,
                alt:''
            },
            bestseller:false,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        {
            id:14,
            name:"Skulls Black",
            category:'nature',
            price:'40',
            currency:'USD',
            image:{
                src:fourtn,
                alt:''
            },
            bestseller:false,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        
        {
            id:15,
            name:"Monitors",
            category:'food',
            price:'11',
            currency:'USD',
            image:{
                src:fiftn,
                alt:''
            },
            bestseller:false,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        {
            id:16,
            name:"Black and White BG",
            category:'cities',
            price:'65.50',
            currency:'USD',
            image:{
                src:sixtn,
                alt:''
            },
            bestseller:true,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        {
            id:17,
            name:"Upside down Smile",
            category:'people',
            price:'10.00',
            currency:'USD',
            image:{
                src:svntn,
                alt:''
            },
            bestseller:false,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        {
            id:18,
            name:"Sun Tsu",
            category:'people',
            price:'499.99',
            currency:'USD',
            image:{
                src:eigtn,
                alt:''
            },
            bestseller:false,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        {
            id:19,
            name:"Holiday Greeting",
            category:'food',
            price:'130',
            currency:'USD',
            image:{
                src:twnty,
                alt:''
            },
            bestseller:true,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },
        {
            id:21,
            name:"Rotweiller",
            category:'pet',
            price:'344.22',
            currency:'USD',
            image:{
                src:Lady,
                alt:''
            },
            bestseller:true,
            featured:false,
            details:{
                dimensions:{
                    width:'1020',
                    height:'1020'
                },
                size:'15000',
                description:'Lorem ipsum this is a demo api payload designed for ...',
                recommendations:null
            }
        },


    ]
}
export default db;