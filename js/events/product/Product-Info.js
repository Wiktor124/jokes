class ProductInfo {
  static productArr = [];

  static product(data) {
    const productData = { ...this.productData, ...data };
    this.productData = productData;
  }

  static joke(data) {
    const productData = { ...this.productData, ...data };
    this.productData = productData;
  }

  static joinInfo() {
    return this.productData
  }
}
ProductInfo.productData = {};

export { ProductInfo }