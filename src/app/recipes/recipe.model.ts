export class Recipe{

  public name:string;
  public description:string;
  public imagePath:string;

  constructor(name:string,desc:string,imgPath:string)
  {
    console.log('constructor invoked'+name);
    this.name=name;
    this.description=desc;
    this.imagePath=imgPath;
  }
}
