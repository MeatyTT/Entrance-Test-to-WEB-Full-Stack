let a = [];
export default function alternatingSums(a) {
    let team1 = 0;
    let team2 = 0;
    let b=[];
    for (let i = 0; i < a.length; i++)
        if(i%2==0) team1+=a[i];
        else team2+=a[i]
    b.push(team1);b.push(team2);
    console.log(b);
}

