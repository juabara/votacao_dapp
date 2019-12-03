pragma solidity ^0.4.26;

contract Votacao {

    uint public amount = 0;
    address public owner;
    address[] public payers;
    mapping(string => string) votes;

    constructor() public {
        owner = msg.sender;
    }

    function payFine() public payable {
        require(owner != msg.sender, "Multa não pode ser paga pelo governo.");
        require(msg.value == 1 ether, "Valor da multa é de 1 ether");
        payers.push(msg.sender);
        amount += msg.value;
    }

    function vote(string memory name, string memory candidate) public {
        votes[name] = candidate;
    }
}
