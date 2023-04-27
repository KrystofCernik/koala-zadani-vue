
export default interface Person {
    data: Parent | Child | GrandChild,
    children: Path
}

interface Parent {
    "ID": string,
    "Name": string,
    "Gender": string,
    "Ability": any,
    "Minimal distance": string,
    "Weight": string,
    "Born": string,
    "In space since": string,
    "Beer consumption (l/y)": string,
    "Knows the answer?": string,
}

interface Child {
    "Character ID": string,
    "ID": string,
    "Is alive?": string,
    "Years": string
}

interface GrandChild {
    "ID": string,
    "Nemesis ID": string,
    "Secrete Code": string
}

interface Path {
    "has_nemesis": {
        "records": Array<Person>
    },
    "has_secrete": {
        "records": Array<Person>
    }
}