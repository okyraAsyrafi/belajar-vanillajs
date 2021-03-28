const anchestor = [
  {
    name: "Sumandra",
    child: [
      {
        name: "Wayan Tjinta",
        child: [
          {
            name: "Mbok Adek",
          },
          {
            name: "Kakmang",
          },
          {
            name: "Mbak Tanjung",
            child: [
              {
                name: "Arjuna",
              },
            ],
          },
          {
            name: "Yein",
          },
        ],
      },
      {
        name: "Sumayasa",
        child: [
          {
            name: "Lolik",
            child: [{ name: "Wira" }],
          },
          {
            name: "Novita",
          },
          {
            name: "Suguscol",
          },
        ],
      },
    ],
  },
];

console.log(anchestor);

function rederAnchestor(node, depth = 0){
  let inheritence = "", space ="";

  for (let i = 0; i < depth; i++) {
    inheritence+= "-";
    space+="  "
  }

  node.forEach(function(item) {
    console.log(`${depth > 0 ? space+ "└"+inheritence+ "" : ""}${item.name}`);

    if(item.child) rederAnchestor(item.child, (depth +=1));
  });
}

rederAnchestor(anchestor, 0);
