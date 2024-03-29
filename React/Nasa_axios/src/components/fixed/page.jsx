'use client';
import React, { useState } from 'react';
import meteoriteData from 'public/meteoriteData.json';
import Search from './_components/filterComponents/Search';
import Table from './_components/dataTable/Table';
import Display from './_components/summaryMetrics/Display';

export default function Home() {
  const [filteredDataSet, setFilteredDataSet] = useState(meteoriteData);
  const [sortingMethod, setSortingMethod] = useState(undefined);
  const [ massSliderV1, setMassSliderV1 ] = useState(0);
  const [ massSliderV2, setMassSliderV2 ] = useState(23000000);
  const [ yearSliderV1, setYearSliderV1 ] = useState(500);
  const [ yearSliderV2, setYearSliderV2 ] = useState(2023);
  const [ nameSearch,setNameSearch] = useState("");
  const [ recSearch,setRecSearch] = useState("");

    //filter Mass with inputs from slider
    function filterMass(meteoriteData){
        return meteoriteData.mass > massSliderV1 && meteoriteData.mass < massSliderV2 ;
    }
    // filter Year with inputs from slider
    function filterYear(meteoriteData) {
        const date = new Date(meteoriteData.year)
        const year = date.getFullYear();
        return year > yearSliderV1 && year < yearSliderV2;
    }
    // filter name with text input
    function filterName(meteoriteData){
        return nameSearch.toLowerCase() === '' ? meteoriteData : meteoriteData.name.toLowerCase().includes(nameSearch);
    }
    // filter Rec Class with text input
    function filterRecClass(meteoriteData){
        return recSearch.toLowerCase() === '' ? meteoriteData : meteoriteData.recclass.toLowerCase().includes(recSearch);
    }
    // manipulated data variable  //
    const results = [...meteoriteData].filter(filterYear).filter(filterMass).filter(filterName).filter(filterRecClass)

  return (
    <main className='lg:grid lg:grid-cols-10 flex flex-col m-12 gap-4'>
      <div className='lg:col-span-6  lg:min-w-[500px] min-w-[300px]'>
        <Display results={results} />
      </div>
      <div className='lg:col-span-4 flex flex-col justify-start gap-4'>
        <div className=''>
          <Search
            setFilteredDataSet={setFilteredDataSet}
            filteredDataSet={filteredDataSet}
            setSortingMethod={setSortingMethod}
            massSliderV1={massSliderV1} 
            setMassSliderV1={setMassSliderV1} 
            massSliderV2={massSliderV2} 
            setMassSliderV2={setMassSliderV2} 
            yearSliderV1={yearSliderV1} 
            setYearSliderV1={setYearSliderV1} 
            yearSliderV2={yearSliderV2} 
            setYearSliderV2={setYearSliderV2} 
            nameSearch={nameSearch} 
            setNameSearch={setNameSearch} 
            recSearch={recSearch} 
            setRecSearch={setRecSearch} 
          />
        </div>
        <div className=''>
          <Table results={results} />
        </div>
      </div>
    </main>
  );
}
