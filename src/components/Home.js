import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import Restaurants from './Restaurants';
import { listRestaurants } from '../actions/restaurantActions'
import { useDispatch, useSelector } from 'react-redux'


function Home() {
    //const [hotels, setHotels] = useState([])
    const [search, setSearch] = useState("")
    const dispatch = useDispatch();
    const restaurantData = useSelector(state => state.restaurantReducer);
    const {restaurants}=restaurantData

    useEffect(() => {
        // const fetchData = async () => {
        //     await fetch('./restaurants.json')
        //         .then((res) => res.json())
        //         .then((data) => setHotels(data.restaurants))
        // }
        // fetchData();

        dispatch(listRestaurants())
    }, [])

    console.log("our data is" ,restaurants);


    return (
        <>
            <Row>
                <input value={search} placeholder='enter place here' type="text"
                    onChange={event => setSearch(event.target.value)} />

                {restaurants ? (//ternary operation
                    restaurants.filter(item => {
                        if (search === "") {
                            return item
                        }
                        else if (item.neighborhood.toLowerCase().includes(search.toLowerCase())) {
                            return item
                        }
                    })
                        .map(item => (
                            <Col sm={12} md={8} lg={6} xl={3}>
                                <Restaurants item={item} />
                            </Col>
                        ))

                ) : ("error")
                }

            </Row>

        </>
    );
}
export default Home;
