import React from 'react';
import Card from './Cardcolumn';
  // const Cards = [
    //     {
    //         svg: 'https://risevest.com/_next/static/images/stocks-icon-35fcfa408943e5d9978954da7fb643f6.png',
    //         title: 'Stocks',
    //         description: 'We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.',
    //         returns: 'Historical returns: 14% per annum Risk Level: Medium',
    //         continue: 'Learn how Stocks work',
    //         color: '#FFF4F0'
    //     },
    //     {
    //         svg: 'https://risevest.com/_next/static/images/real-estate-icon-e505fbeb26796ee3e2488d622ab2f2a2.png',
    //         title: 'Real Estate',
    //         description: 'Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.',
    //         returns: 'Historical returns: 14% per annum Risk Level: Medium',
    //         continue: 'Learn how Real Estate work',
    //         color: '#F6F2FF'
    //     },
    //     {
    //         svg: 'https://risevest.com/_next/static/images/fixed-income-icon-91ec4249f20dc730b243b865b024de5f.png',
    //         title: 'Fixed Income',
    //         description: 'A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.',
    //         returns: 'Historical returns: 14% per annum Risk Level: Medium',
    //         continue: 'Learn how Fixed Income work',
    //         color: '#ECFEFE'
    //     }
    // ]
export default function Cards() {
  return (
    <div>
        <div>
            <div className='assets_container'>
            <h2>Assets Classes</h2>
            <p>It’s your money, choose where you invest it</p>
            </div>
           <div className='wrapper'>
           <Card img= 'https://risevest.com/_next/static/images/stocks-icon-35fcfa408943e5d9978954da7fb643f6.png'
             title='Stocks'
             description= 'We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.'
             returns='Historical returns: 14% per annum Risk Level: Medium'
             continue= 'Learn how Stocks work'
             />
             <Card  img='https://risevest.com/_next/static/images/real-estate-icon-e505fbeb26796ee3e2488d622ab2f2a2.png'
             title= 'Real Estate'
             description='Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.'
             returns= 'Historical returns: 14% per annum Risk Level: Medium'
             continue='Learn how Real Estate work'
             />
            <Card img='https://risevest.com/_next/static/images/fixed-income-icon-91ec4249f20dc730b243b865b024de5f.png'
            title='Fixed Income'
            description= 'A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money '
            returns= 'Historical returns: 14% per annum Risk Level: Medium'
            continue='Learn how Fixed Income work'
             />
           </div>
        </div>
    </div>
  )
}
