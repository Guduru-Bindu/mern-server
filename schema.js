//schema.js
//create a schema using GQL
const {gql} = require('apollo-server-express');
const typeDefs = gql`
type User{
    _id:String!,
    name:String!,
    email:String!,
    password:String!

}
input createUserInput{
    name:String!,
    email:String!,
    password:String!
}
type Query{
    getUsers(_id:ID!):User

}
type Mutation{
    createUser(input:createUserInput!):User
    changePass(_id:ID!,password:String!):User
}
`;
module.exports=typeDefs;//export out