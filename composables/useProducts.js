export function useProducts() {
  const products = [
    {
      title: "Long Sleeeved Patterned Flannel Shirt",
      image: "/images/tops/LongSleevePatternedFlannelShirt.jpeg",
      priceNow: "$50",
      priceWas: "$60",
      category: "tops",
      description:
        "Long sleeve patterned flannel shirt from Urban Outfitters. Full-length front button closure with pointed collar. Finished with rounded hem + patch pocket at chest.",
      size: ["XS", "S", "M", "L", "XL"],
    },
    {
      title: "40s & Shorties Text Logo Tee",
      image: "/images/tops/40sShortiesTextLogoTee.jpeg",
      priceNow: "$40",
      priceWas: "$45",
      category: "tops",
      description:
        "Simplistic logo tee from 40s & Shorties, featuring a primary color rendition of their typeface logo. Cotton is cut in a standard fit and offers short sleeves and tonal, ribbed banding at crew-neck.",
      size: ["S", "M", "L", "XL"],
    },
    {
      title: "Long Sleeeved Patterned Flannel Shirt",
      image: "/images/tops/LongSleevePatternedFlannelShirt2.jpeg",
      priceNow: "$40",
      priceWas: "$45",
      category: "tops",
      description:
        "Long sleeve patterned flannel shirt from Urban Outfitters. Full-length front button closure with pointed collar. Finished with rounded hem + patch pocket at chest.",
      size: ["M", "L", "XL", "XXL"],
    },
    {
      title: "Southern Jacquard Flannel Shirt",
      image: "/images/tops/SouthwesternJacquardFlannelShirt.jpeg",
      priceNow: "$40",
      priceWas: "$45",
      category: "tops",
      description:
        "Long sleeve patterned flannel shirt from Urban Outfitters in a southwestern print. Full-length front button closure with pointed collar. Finished with rounded hem + patch pockets at chest.",
      size: ["S", "M", "L"],
    },
    {
      title: "Boardies\u00AE Refresher Swim Short",
      image: "/images/shorts/BoardiesRefresherSwimShort.jpeg",
      priceNow: "$40",
      priceWas: "$45",
      category: "bottoms",
      description:
        "Bold hues meet thick stripes in these colorblocked swim shorts from Boardies®, cut above the knee and topped with an adjustable drawcord waist for a perfect fit. Finished with front slant pockets and a single back patch pocket with woven logo tag. London-based Boardies® designs apparel + swim for those who like to have fun and express their individuality.",
      size: ["S", "M", "L", "XL"],
    },
    {
      title: "Lucien Stripe Knit Volley Short",
      image: "/images/shorts/LucienStripeKnitVolleyShort.jpeg",
      priceNow: "$40",
      priceWas: "$45",
      category: "bottoms",
      description:
        "Easy pull on + go short in an allover vertical stripe pattern. Soft textured cotton is cut in a silhouette that hits above the knee with a split hem, featuring an elastic waist + adjustable exterior drawstring for a comfortable fit. Complete with front slip pockets and back patch pockets. Get them only at Urban Outfitters.",
      size: ["L", "XL", "XXL"],
    },
    {
      title: "Andy Warhol Patterned Boxer Brief",
      image:
        "/images/accesories/CalvinKleinXAndyWarholPatternedBoxerBrief.jpeg",
      priceNow: "$40",
      priceWas: "$45",
      category: "accessories",
      description:
        "Soft cotton-poly boxer brief from Calvin Klein, featuring iconic prints by American pop artist Andy Warhol. Complete with functional keyhole fly + wide elastic waistband with Calvin Klein logo detailing.",
      size: ["S", "M", "L", "XL", "XXL"],
    },
    {
      title: "Vibes Sports Stock",
      image: "/images/accesories/VibesSportsStock.jpeg",
      priceNow: "$40",
      priceWas: "$45",
      category: "accessories",
      description:
        "Major Vibes all day in these crew-length knit socks, complete with ribbing at ankle.",
      size: ["S", "M"],
    },
  ];

  return { products };
}
