import { Container, Row, Col, Spinner, Card } from 'react-bootstrap';
import SearchField from '../components/SearchField.js';
import BrandBar from '../components/BrandBar.js';
import MehanizmBar from '../components/MehanizmBar.js';
import GenderBar from '../components/GenderBar.js';
import ShapeBar from '../components/ShapeBar.js';
import MaterialBar from '../components/MaterialBar.js';
import GlassBar from '../components/GlassBar.js';
import StrapBar from '../components/StrapBar.js';
import PowerBar from '../components/PowerBar.js';
import WaterBar from '../components/WaterBar.js';
import ProductList from '../components/ProductList.js';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../components/AppContext.js';
import {fetchBrands, fetchMehanizms, fetchGenders, fetchShapes, fetchMaterials, fetchGlasses, fetchStraps, fetchPowers, 
    fetchWaters, fetchCollections, 
    fetchAllProducts
} from '../http/catalogAPI.js';
import { observer } from 'mobx-react-lite';
import { useLocation, useSearchParams } from 'react-router-dom';
import ProductsSort from '../components/PrtoductsSort.js';
import PriceSlider from '../components/PriceSlider/PriceSlider.jsx';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const getSearchParams = (searchParams) => {
    let brand = searchParams.get('brand');
    if (brand && /[1-9][0-9]*/.test(brand)) {
        brand = parseInt(brand);
    }
    let mehanizm = searchParams.get('mehanizm');
    if (mehanizm && /[1-9][0-9]*/.test(mehanizm)) {
        mehanizm = parseInt(mehanizm);
    }
    let gender = searchParams.get('gender');
    if (gender && /[1-9][0-9]*/.test(gender)) {
        gender = parseInt(gender);
    }
    let shape = searchParams.get('shape');
    if (shape && /[1-9][0-9]*/.test(shape)) {
        shape = parseInt(shape);
    }
    let material = searchParams.get('material');
    if (material && /[1-9][0-9]*/.test(material)) {
        material = parseInt(material);
    }
    let glass = searchParams.get('glass');
    if (glass && /[1-9][0-9]*/.test(glass)) {
        glass = parseInt(glass);
    }
    let strap = searchParams.get('strap');
    if (strap && /[1-9][0-9]*/.test(strap)) {
        strap = parseInt(strap);
    }
    let power = searchParams.get('power');
    if (power && /[1-9][0-9]*/.test(power)) {
        power = parseInt(power);
    }
    let water = searchParams.get('water');
    if (water && /[1-9][0-9]*/.test(water)) {
        water = parseInt(water);
    }
    let collection = searchParams.get('collection');
    if (collection && /[1-9][0-9]*/.test(collection)) {
        collection = parseInt(collection);
    }
    let page = searchParams.get('page');
    if (page && /[1-9][0-9]*/.test(page)) {
      page = parseInt(page);
    }
    return { brand, mehanizm, gender, shape, material, glass, strap, power, water, collection, page };
  };

const Shop = observer(() => {
    const { catalog } = useContext(AppContext);
    const [brandsFetching, setBrandsFetching] = useState(true);
    const [mehanizmsFetching, setMehanizmsFetching] = useState(true);
    const [gendersFetching, setGendersFetching] = useState(true);
    const [shapesFetching, setShapesFetching] = useState(true);
    const [materialsFetching, setMaterialsFetching] = useState(true);
    const [glassesFetching, setGlassesFetching] = useState(true);
    const [strapsFetching, setStrapsFetching] = useState(true);
    const [powersFetching, setPowersFetching] = useState(true);
    const [watersFetching, setWatersFetching] = useState(true);
    const [collectionsFetching, setCollectionsFetching] = useState(true);
    const [productsFetching, setProductsFetching] = useState(true);
    const [sortOrder, setSortOrder] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [maxPrice, setMaxPrice] = useState(null);

    useEffect(() => {
        async function getPrices() {
            const prices = await axios.get(process.env.REACT_APP_IMG_URL + `api/product/price`);
            setMaxPrice(prices.data.max);
        }
        getPrices();
    }, []);

    useEffect(() => {

    fetchBrands()
        .then((data) => (catalog.brands = data))
        .finally(() => setBrandsFetching(false));

    fetchMehanizms()
        .then((data) => (catalog.mehanizms = data))
        .finally(() => setMehanizmsFetching(false));

    fetchGenders()
        .then((data) => (catalog.genders = data))
        .finally(() => setGendersFetching(false));

    fetchShapes()
        .then((data) => (catalog.shapes = data))
        .finally(() => setShapesFetching(false));

    fetchMaterials()
        .then((data) => (catalog.materials = data))
        .finally(() => setMaterialsFetching(false));

    fetchGlasses()
        .then((data) => (catalog.glasses = data))
        .finally(() => setGlassesFetching(false));

    fetchStraps()
        .then((data) => (catalog.straps = data))
        .finally(() => setStrapsFetching(false));

    fetchPowers()
        .then((data) => (catalog.powers = data))
        .finally(() => setPowersFetching(false));

    fetchWaters()
        .then((data) => (catalog.waters = data))
        .finally(() => setWatersFetching(false));
    
    fetchCollections()
        .then((data) => (catalog.collections = data))
        .finally(() => setCollectionsFetching(false))
    
        const { brand, mehanizm, gender, shape, material, glass, strap, power, water, collection, page } =
        getSearchParams(searchParams);
        catalog.brand = brand;
        catalog.mehanizm = mehanizm;
        catalog.gender = gender;
        catalog.shape = shape;
        catalog.material = material;
        catalog.glass = glass;
        catalog.strap = strap;
        catalog.power = power;
        catalog.water = water;
        catalog.collection = collection;
        catalog.page = page ?? 1;
    }, []);

    useEffect(() => {
        const { brand, mehanizm, shape, gender, material, glass, strap, power, water, collection, page } = getSearchParams(searchParams);
        if (brand || mehanizm || gender || shape || material || glass || strap || power || water || collection || page) {
            if (brand !== catalog.brand) {catalog.brand = brand}
            if (mehanizm !== catalog.mehanizm) {catalog.mehanizm = mehanizm}
            if (gender !== catalog.gender) {catalog.gender = gender}
            if (shape !== catalog.shape) {catalog.shape = shape}
            if (material !== catalog.material) {catalog.material = material}
            if (glass !== catalog.glass) {catalog.glass = glass}
            if (strap !== catalog.strap) {catalog.strap = strap}
            if (power !== catalog.power) {catalog.power = power}
            if (water !== catalog.water) {catalog.water = water}
            if (collection !== catalog.collection) {catalog.collection = collection}
            if (page !== catalog.page) {catalog.page = page ?? 1}
        } else {
            catalog.brand = null;
            catalog.mehanizm = null;
            catalog.gender = null;
            catalog.shape = null;
            catalog.material = null;
            catalog.glass = null;
            catalog.strap = null;
            catalog.power = null;
            catalog.water = null;
            catalog.collection = null;
            catalog.page = 1;
        }
    }, [location.search]);

    useEffect(() => {
        setProductsFetching(true);
        fetchAllProducts(
            searchTerm,
            catalog.brand,
            catalog.mehanizm,
            catalog.gender,
            catalog.shape,
            catalog.material,
            catalog.glass,
            catalog.strap,
            catalog.power,
            catalog.water,
            catalog.collection,
            catalog.page,
            catalog.limit,
            sortOrder,
            catalog.minPrice,
            catalog.maxPrice,
        )
        .then((data) => {
            const filtered = data.rows.filter((product) => {
                return product.price > catalog.minPrice && product.price <= catalog.maxPrice;
            });
            catalog.count = data.count;
            filtered.splice(catalog.limit * catalog.page, filtered.length);
            console.log('filtered: ', filtered);
            catalog.products = filtered;
        })
        .finally(() => setProductsFetching(false));
    }, [
        searchTerm,
        catalog.brand,
        catalog.mehanizm,
        catalog.gender,
        catalog.shape,
        catalog.material,
        catalog.glass,
        catalog.strap,
        catalog.power,
        catalog.water,
        catalog.collection,
        catalog.page,
        catalog.minPrice,
        catalog.maxPrice,
        sortOrder,
        maxPrice,
        catalog.page,
    ]);

    return (
        <Container>
            <Helmet>
                <title>Купить наручные часы в Алматы | Мужские часы Алматы | Женские часы Алматы</title>
                <meta name="description" content="Купить наручные часы в Алматы - Aksessuary.KZ"/>
                <meta name="keywords" content="магазин швейцарских часов, магазин наручных часов, купить швейцарские часы, купить наручные часы в Алматы, наручные часы в Алматы, 
                    часы в Алматы, купить наручные часы, наручные часы, часы, купить часы Anne Klein в Алматы, купить часы Calvin Klein в Алматы, купить часы Orinet в Алматы, 
                    купить часы Citizen в Алматы, купить часы Diesel в Алматы, купить часы Swatch в Алматы, мужские часы, женские часы" />
            </Helmet>
            <Row className="mt-4">
                <Col md={3}>
                    
                </Col>
                <Col mt={5}>
                    <SearchField onSearch={setSearchTerm} />
                </Col>
                <Col md={4}>
                    <ProductsSort setSortOrder={setSortOrder} />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={3} className="mb-3">
                    <div>{maxPrice ? <PriceSlider maxPrice={maxPrice} /> : null}</div>
                    <div>{brandsFetching ? <Spinner animation="border" /> : <BrandBar />}</div>
                    <div className="mt-3">{mehanizmsFetching ? <Spinner animation="border" /> : <MehanizmBar />}</div>
                    <div className="mt-3">{gendersFetching ? <Spinner animation="border" /> : <GenderBar />}</div>
                    <div className="mt-3">{shapesFetching ? <Spinner animation="border" /> : <ShapeBar />}</div>
                    <div className="mt-3">{materialsFetching ? <Spinner animation="border" /> : <MaterialBar />}</div>
                    <div className="mt-3">{glassesFetching ? <Spinner animation="border" /> : <GlassBar />}</div>
                    <div className="mt-3">{strapsFetching ? <Spinner animation="border" /> : <StrapBar />}</div>
                    <div className="mt-3">{powersFetching ? <Spinner animation="border" /> : <PowerBar />}</div>
                    <div className="mt-3">{watersFetching ? <Spinner animation="border" /> : <WaterBar />}</div>
                    <Card className='mt-3' style={{height: '40px'}}>
                        <a href='/shop' style={{fontSize: '18px', color: 'black', textDecoration: 'none', marginTop: '5px', marginLeft: '12px'}}>Сбросить</a>
                    </Card>
                </Col>
                <Col md={9}>
                    <div>{productsFetching ? (<Spinner animation="border" />) : (<ProductList sortOrder={sortOrder} />)}</div>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;