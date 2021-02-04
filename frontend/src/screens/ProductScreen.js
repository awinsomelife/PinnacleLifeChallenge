import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';


export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
            <Link to="/">Back to result</Link>
            <div className="row top">
              <div className="col-1">
                <img className="large" src={product.image} alt={product.name}></img>
              </div>
              <div className="col-1">
                <ul>
                  <li>
                    <h1>Product Name: {product.name}</h1>
                  </li>
                  <li><b>Price :</b> ${product.priceValue}</li>
                  <li>
                    <b>Description:</b>
                    <p>{product.description}</p>
                  </li>
                  <li>
                    <b>1st Year payment:</b>
                    <p>${product.fPrice} (Downpayment, Loan, Insurance and Maintenance)</p>
                  </li>
                </ul>
              </div>
              <div className="col-1">
                <div className="card card-body">
                  <ul>
                    <li>
                      <div className="row">
                        <div>Price</div>
                        <div className="price">${product.fPrice}</div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div>Status</div>
                        <div>
                          {product.countInStock > 0 ? (
                            <span className="success">In Stock</span>
                          ) : (
                              <span className="danger">Unavailable</span>
                            )}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div>Stock left</div>
                        <div className="stockcount">{product.countInStock}</div>
                      </div>
                    </li>

                    <li>
                      <button className="primary block">Add to Cart</button>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
            
      )}
    </div>
  );
}