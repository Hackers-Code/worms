'use strict';
class UniqueNameStorage {
	constructor( length )
	{
		this.nameLength = length;
		this.storedNames = [];
	}

	addName( name )
	{
		if( !name instanceof Buffer )
		{
			return false;
		}
		if( name.length !== this.nameLength )
		{
			return false;
		}
		if( !this.isUnique( name ) )
		{
			return false;
		}
		this.storedNames.push( name );
		return true;
	}

	removeName( name )
	{
		for( let i = 0 ; i < this.storedNames.length ; i++ )
		{
			if( name.compare( this.storedNames[ i ] ) === 0 )
			{
				this.storedNames.splice( i, 1 );
				break;
			}
		}
	}

	isUnique( name )
	{
		for( let i = 0 ; i < this.storedNames.length ; i++ )
		{
			if( name.compare( this.storedNames[ i ] ) === 0 )
			{
				return false;
			}
		}
		return true;
	}
}

module.exports = UniqueNameStorage;