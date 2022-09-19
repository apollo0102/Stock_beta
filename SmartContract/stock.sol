// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract stock is Ownable, ReentrancyGuard, ERC721A {
    using SafeMath for uint256;
    using SafeMath for uint16;
    using SafeMath for uint8;

    uint8 public mintStep = 0;
    //these values will be changed. It's not static values.
    struct Document { 
      string invoiceNr;
      string buyerName;
      uint totalAmount;
      string supplierName;
      uint dueDate;
    }

    struct Provider {
        bool provenance;
        uint riskScore;
        uint collateralValue;
    }
    

    mapping (uint256 => string) tokenURIMap;
    mapping (address => Document) documentMap;
    mapping (address => Provider) providerMap;
    
    constructor(uint256 maxBatchSize_, uint256 collectionSize_) 
        ERC721A("Stock", "Stock", maxBatchSize_, collectionSize_) {
    }
    event Mint (address indexed _from);

    /**
     * Override tokenURI
     */
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "Token does not exist");
        return string(abi.encodePacked(tokenURIMap[tokenId]));
    }

    function mint(uint8 _mintCount, bytes32[] memory _proof) external payable nonReentrant returns (uint256) {
        require(msg.sender != address(0));
        uint256 numChunks = _mintCount / maxBatchSize;
        for (uint256 i = 0; i < numChunks; i++) {
            _safeMint(msg.sender, maxBatchSize);
        }

        documentMap[msg.sender].invoiceNr = "";
        providerMap[msg.sender].invoiceNr = "";
        
        uint256 ts = totalSupply();
        emit Mint(msg.sender);
        return ts;
    }

    function read(uint8 _mintNumber) external payable nonReentrant returns (uint256) {
         require(_mintNumber);
    }

    function write(uint8 _mintNumber) public {
        
    }

    function buy() external payable nonReentrant returns (bool) {
        
    }
}