export const getCandyBarPrice = (name, size) => {
    //write code here
    switch(size) {
      case 'small':
          price = '$1.00';
          return name + " costs " + price;
          break;
      case 'medium':
          price = '$1.75';
          return name + " costs " + price;
          break;
      case 'large':
          price = '$2.50';
          return name + " costs " + price;
          break;
      case 'jumbo':
          price = '$4.75';
          return name + " costs " + price;
          break;
      default:
          return "Associate, please look up price and check if valid";
          break;
  }
  
  }
  
  const result = getCandyBarPrice('Darkest Cocoa', 'ssmall')
  console.log(result)